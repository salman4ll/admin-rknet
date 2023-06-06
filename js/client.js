$.ajax(
    {
        url:'https://ap-southeast-1.aws.data.mongodb-api.com/app/rk-net-wjgwl/endpoint/client',
        type: 'GET',
        beforeSend: ()=>{
            $('#client tbody').html('<tr><td colspan="3">Data sedang di-load ...</td></tr>');
        },
        success: (res)=>{
            $('#client tbody').html('');

            if(! res.length){//kalau koleksi kosong
                $('#client tbody').html('<tr><td colspan="3">Belum ada datanya ...</td></tr>');
            }

            $.each(res, (index, data)=>{
                $('#client tbody').append(
                    '<tr>'+                        
                        '<td>'+data.nama+'</td>'+
                        '<td>'+data.lokasi+'</td>'+
                        '<td>'+data.deskripsi+'</td>'+                                
                        '<td><button data-id="'+data._id+'" class="btn btn-success btn-sm edit"><i class="fas fa-edit"></i></button> &nbsp;'+ 
                        '<button data-id="${data._id}" class="btn btn-danger btn-sm delete"><i class="far fa-trash-alt"></i></button></td>'+
                    '</tr>'    
                );
              }
            );
        },
        error: (err)=>{
            console.log(err);
        }
    }
);
$('#client').on('click', '.delete', (e) => {
    if (confirm("Yakin ingin menghapus data ini?")) {
      const nomorNya = $(e.currentTarget).data('id');
  
      $.ajax({
        url: 'https://ap-southeast-1.aws.data.mongodb-api.com/app/rk-net-wjgwl/endpoint/client?id=' + nomorNya,
        type: 'DELETE',
        beforeSend: () => {
          $('.btn').prop('disabled', true);
        },
        success: (res) => {
          window.location = 'client.html';
        },
        error: (err) => {
          console.log(err);
        }
      });
    }
  });
  
  

$('#form').submit(
    ()=>{
       $.ajax(
        {
         url:'https://ap-southeast-1.aws.data.mongodb-api.com/app/rk-net-wjgwl/endpoint/client',
         type:'POST',
         data:JSON.stringify({ nama:$('#namanya').val(),
         lokasi:$('#lokasinya').val(),
         deskripsi:$('#deskripsinya').val(),
         }),
         contentType: 'application/json',
         beforeSend:()=>{$('#form button').prop('disabled',true);},
         success:(res)=>{
                      $('#form button').prop('disabled',false);
                      window.location="client.html";
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