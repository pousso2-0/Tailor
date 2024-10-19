import { Form, Button } from "react-bootstrap";

export default function PostForm({ user, handleShow }) {
    return (
        <div className="card">
            <div className="card-body">
                <div className="d-flex align-items-center mb-3">
                    <div className="user-img me-3">
                        <img src={user.profilePicture} alt={user.name} className="avatar-60 rounded-circle" />
                    </div>
                    <Form className="post-text w-100" onClick={handleShow}>
                        <Form.Control
                            type="text"
                            className="rounded"
                            placeholder="Écrivez quelque chose ici..."
                            style={{ border: "none" }}
                        />
                    </Form>
                </div>
                <hr />
                <ul className="post-opt-block d-flex list-inline m-0 p-0">
                    <li className="me-3 mb-0">
                        <Button variant="soft-primary" onClick={handleShow}>
                            <i className="ri-image-fill me-2"></i>Photo/Vidéo
                        </Button>
                    </li>
                    <li className="me-3 mb-0">
                        <Button variant="soft-primary" onClick={handleShow}>
                            <i className="ri-edit-box-line me-2"></i>Créer un post
                        </Button>
                    </li>
                </ul>
            </div>
        </div>
    )
}