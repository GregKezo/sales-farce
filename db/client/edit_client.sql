update client set 
    first_name = COALESCE(${new_first_name} ,first_name )
    ,last_name = COALESCE(${new_last_name} ,last_name )
    ,client_of = COALESCE(${id},client_of )
    ,phone_number = COALESCE(${new_phone_number} ,phone_number )
    ,email = COALESCE(${new_email} ,email )
    ,notes = COALESCE(${new_notes} ,notes )
    ,street_address = COALESCE(${new_street_address},street_address )
    ,city = COALESCE(${new_city} ,city )
    ,zip_code =  COALESCE(${new_zip_code} ,zip_code  )
    ,state = COALESCE(${new_state} ,state )
    ,country =  COALESCE(${new_country} ,country  )
    ,birthday = COALESCE(${new_birthday} ,birthday )
    ,last_updated_by = ${id}
    ,last_updated_on = current_timestamp
WHERE id = ${clientid}
AND ( 
  ${new_first_name} IS NOT NULL AND ${new_first_name} IS DISTINCT FROM first_name OR
  ${new_last_name} IS NOT NULL AND ${new_last_name} IS DISTINCT FROM last_name OR
  ${id} IS NOT NULL AND ${id} IS DISTINCT FROM client_of OR
  ${new_phone_number} IS NOT NULL AND ${new_phone_number} IS DISTINCT FROM phone_number OR
  ${new_email} IS NOT NULL AND ${new_email} IS DISTINCT FROM email OR
  ${new_notes} IS NOT NULL AND ${new_notes} IS DISTINCT FROM notes OR
  ${new_street_address} IS NOT NULL AND ${new_street_address} IS DISTINCT FROM street_address OR
  ${new_city} IS NOT NULL AND ${new_city} IS DISTINCT FROM city OR
  ${new_zip_code} IS NOT NULL AND ${new_zip_code} IS DISTINCT FROM zip_code OR
  ${new_state} IS NOT NULL AND ${new_state} IS DISTINCT FROM state OR
  ${new_country} IS NOT NULL AND ${new_country} IS DISTINCT FROM country OR
  ${new_birthday} IS NOT NULL AND ${new_birthday} IS DISTINCT FROM birthday OR
  ${id} IS NOT NULL AND ${id} IS DISTINCT FROM last_updated_by  
  )

RETURNING *