$.ajax(
    {
        url:'https://ap-southeast-1.aws.data.mongodb-api.com/app/rk-net-fhifn/endpoint/rkharga',
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
