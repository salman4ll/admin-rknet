$.ajax(
    {
        url:'https://ap-southeast-1.aws.data.mongodb-api.com/app/rk-net-wjgwl/endpoint/tentang_kami',
        type: 'GET',
        beforeSend: ()=>{
            $('#tentang-kami2').html('<tr><td colspan="3">Data sedang di-load ...</td></tr>');
        },
        success: (res)=>{
            $('#exampleFormControlTextarea1').html(res.tentang)
            $('#tentang-kami2').html(res.tentang)
            
            // if(! res.length){//kalau koleksi kosong
            //     $('#tentang-kami tbody').html('<tr><td colspan="3">Belum ada datanya ...</td></tr>');
            // }

            // $.each(res, (index, data)=>{
            //     $('#tentang-kami tbody').append(
            //         '<tr>'+
            //             '<td>'+data.tentang+'</td>'+
            //             '<td><button type="button" class="btn btn-success"><i class="fas fa-edit"></i></button></td>'+
            //         '</tr>'    
            //     );
            //   }
            // );
        },
        error: (err)=>{
            console.log(err);
        }
    }
);

$('#tentang').submit(
    ()=>{
       $.ajax(
        {
         url:'https://ap-southeast-1.aws.data.mongodb-api.com/app/rk-net-wjgwl/endpoint/tentang_kami',
         type:'PUT',
         data:JSON.stringify({ tentang: $('#exampleFormControlTextarea1').val() }),
         contentType: 'application/json',
         beforeSend:()=>{$('#form button').prop('disabled',true);},
         success:(res)=>{
                      $('#form button').prop('disabled',false);
                      window.location="about.html";
                   },
         error:(err)=>{
                    $('#form button').prop('disabled',false);
                    console.log(err.message);	
                    console.log($('"test":#exampleFormControlTextarea1').val())
                }
        }
       );
       return false;
    }
);