insert into client (
    first_name 
    ,last_name 
    ,client_of 
    ,phone_number 
    ,email 
    ,notes 
    ,street_address
    ,city 
    ,zip_code 
    ,state 
    ,country 
    ,birthday 
    ,last_updated_by 
    ,last_updated_on 
) values (
    ${first_name} 
    ,${last_name} 
    ,${id} --id passed in twice, admin funtionality needs to be adressed at a later time.
    ,${phone_number} 
    ,${email} 
    ,${notes} 
    ,${street_address}
    ,${city} 
    ,${zip_code} 
    ,${state} 
    ,${country} 
    ,${birthday} 
    ,${id} 
    ,current_timestamp
);

