$.ajax(
    {
        url:'https://ap-southeast-1.aws.data.mongodb-api.com/app/rk-net-wjgwl/endpoint/tentang_kami',
        type: 'GET',
        beforeSend: ()=>{
            $('#tentang-kami2').html('<tr><td colspan="3">Data sedang di-load ...</td></tr>');
        },
        success: (res)=>{
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