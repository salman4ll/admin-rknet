$.ajax(
    {
        url:'https://ap-southeast-1.aws.data.mongodb-api.com/app/rk-net-wjgwl/endpoint/produk',
        type: 'GET',
        beforeSend: ()=>{
            $('#produk tbody').html('<tr><td colspan="3">Data sedang di-load ...</td></tr>');
        },
        success: (res)=>{
            $('#produk tbody').html('');

            if(! res.length){//kalau koleksi kosong
                $('#produk tbody').html('<tr><td colspan="3">Belum ada datanya ...</td></tr>');
            }

            $.each(res, (index, data)=>{
                $('#produk tbody').append(
                    '<tr>'+
                        '<td>'+data.title+'</td>'+
                        '<td>'+data.deskripsi+'</td>'+
                        '<td>'+data.harga+'</td>'+
                        '<td>'+data.bandwidth+'</td>'+
                        '<td><button type="button" class="btn btn-success"><i class="fas fa-edit"></i></button> &nbsp; <button type="button" class="btn btn-danger"><i class="far fa-trash-alt"></i></button></td>'+
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

$('#form').submit(
    ()=>{
       $.ajax(
        {
         url:'https://ap-southeast-1.aws.data.mongodb-api.com/app/rk-net-wjgwl/endpoint/produk',
         type:'POST',
         data:JSON.stringify({ title:$('#titlenya').val(),
         deskripsi:$('#deskripsinya').val(),
         harga:$('#harganya').val(),
         bandwidth:$('#bandwidthnya').val(),
         }),
         contentType: 'application/json',
         beforeSend:()=>{$('#form button').prop('disabled',true);},
         success:(res)=>{
                      $('#form button').prop('disabled',false);
                      window.location="produk.html";
                   },
         error:(err)=>{
                    $('#form button').prop('disabled',false);
                    console.log(err.message);	
                    console.log($('#harganya').val())
                }
        }
       );
       return false;
    }
);
