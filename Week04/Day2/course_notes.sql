select actors.actor_id, actors.first_name, actors.last_name, property.city
from actors
inner join property
on actors.actor_id = property.actor_id