$.ajax(
    {
        url:'https://ap-southeast-1.aws.data.mongodb-api.com/app/rk-net-wjgwl/endpoint/get_client',
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
                        '<td>'+data.id+'</td>'+
                        '<td>'+data.nama+'</td>'+
                        '<td>'+data.lokasi+'</td>'+                                
                        '<td><button data-id="'+data.id+'" class="btn btn-success btn-sm edit"><i class="fas fa-edit"></i></button> &nbsp; <button data-id="'+data.id+'" class="btn btn-danger btn-sm delete"><i class="far fa-trash-alt"></i></button></td>'+
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
$('#client').on('click','.delete',(e)=>{
    if(confirm("Yakin ingin menghapus data ini?")){
        var nomorNya = e.target.dataset.id;

        $.ajax({
            url:'https://ap-southeast-1.aws.data.mongodb-api.com/app/rk-net-wjgwl/endpoint/delete_client?id='+parseInt(nomorNya),
            type: 'DELETE',
            beforeSend: ()=>{
                $('.btn').prop('disabled',true);
            },
            success: (res)=>{
                window.location = 'client.html';
            },
            error: (err)=>{( console.log(err));}
         }
        );
    }
});

$('#form').submit(
    ()=>{
       $.ajax(
        {
         url:'https://ap-southeast-1.aws.data.mongodb-api.com/app/rk-net-wjgwl/endpoint/post_client',
         type:'POST',
         data:{ 
            id:parseInt($('#idnya').val()),                   
            nama:$('#namanya').val(),
            lokasi:$('#lokasinya').val(),
              },
         beforeSend:()=>{$('#form button').prop('disabled',true);},
         success:(res)=>{
                      $('#form button').prop('disabled',false);
                      window.location="client.html";
                   },
         error:(err)=>{
                    $('#form button').prop('disabled',false);
                    console.log(err);	
                }
        }
       );
       return false;
    }
);