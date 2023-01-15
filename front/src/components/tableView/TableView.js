import TableRow from "./TableRow";

const TableView = ({pilots}) =>
    <div className="container">
        <div className="table-responsive">
            <table className="table table-striped">
                <thead>
                <tr>
                    <th scope="col">Pilot Name</th>
                    <th scope="col">Pilot Email</th>
                    <th scope="col">Pilot Phone</th>
                    <th scope="col">Drone distance</th>
                    <th scope="col">Last seen</th>
                </tr>
                </thead>
                <tbody>
                {pilots.map((pilot) =>
                    <TableRow key={pilot.id} pilot={pilot}/>
                )}
                </tbody>
            </table>
        </div>
    </div>

export default TableView