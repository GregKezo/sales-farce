insert into users (
    is_admin
    ,email 
    ,password 
    ,reports_to 
    ,first_name 
    ,last_name 
    ,phone_number 
)
 values (
   false
   ,${email}
   ,${hash}
   ,1
   ,''
   ,''
   ,''
 )

 returning *