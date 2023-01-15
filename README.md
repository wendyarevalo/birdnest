# PROJECT BIRDNEST
### Author: Wendy Arevalo
Pre-assignment for Reaktor Summer 2023 Trainee Position.

### Stack:
Back-end: Express Node Js + Mongo DB

Front-end: React JS + Bootstrap Styling

The app can be found in the following link:


Right now the backend gets the drone list from the provided endpoint,
filters the drones that are violating the distance, and gets their pilots,
saves them to the database. The schema deletes the pilots that are older than 10 minutes.
If the pilot existed already it validates if the new distance is closer to update both the
distance and the last seen time, if is not, then updates only the time.
The backend does this every two seconds.

The frontend is very simple, it gathers information from the backend and maps it to a table.
The information gets updated with a hook.

This app can be definitely improved, for example adding the visualization of drones, adding filters to the list, 
and being able to see details of drones and pilots.


