import { Row } from "react-bootstrap";
import Friend from "./Friend";

export default function ListFriend({users}){
    return(
        <Row>
            {users?.map((user) => (
                <Friend key={users?.id} user={user.followee?user?.followee:user?.follower} />
            ))}
        </Row>
    )
}