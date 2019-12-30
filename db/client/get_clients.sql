select * 
from client
where client_of = $1 --pass in logged in user id