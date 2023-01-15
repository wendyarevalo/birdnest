const TableRow = ({ pilot }) =>
    <tr>
        <td>{pilot.firstName} {pilot.lastName}</td>
        <td>{pilot.email}</td>
        <td>{pilot.phoneNumber}</td>
        <td>{pilot.closestDistance} m</td>
        <td>{pilot.lastSeen}</td>
    </tr>

export default TableRow