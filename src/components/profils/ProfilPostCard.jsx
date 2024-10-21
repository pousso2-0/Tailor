import { Card, Row, Col } from "react-bootstrap";
import Post from "../posts/create/Post";
import CreatePost from "../posts/create/CreatePost";

export default function ProfilPostCard({ user, setUser }) {

    return (
        <Card.Body className=" p-0">
            <Row>
                <Row>
                    <Col sm={12}>
                        <CreatePost user={user} setUser={setUser} />
                    </Col>
                    {user?.posts?.map(post => <Post post={post} />)}
                </Row>
            </Row>
        </Card.Body>
    );
}