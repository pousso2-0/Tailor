import { Collapse } from "react-bootstrap";

import Comment from "./Comment";
import Validator from "../../utilities/Validator";
import { useState } from "react";
import { commentService } from "../../services/CommentService";


export default function CommentList({user, comments, openList, postId }) {
    const [open, setOpen] = openList;
    const validation = new Validator();
    const [form, setForm] = useState(null);


    const handleSubmitComment = (e) => {
        e.preventDefault();
        validation.reset();
        validation.required(form, "content");
        if(validation.hasErrors()){
            console.error(validation.getErrors());
        }else{
            commentService.createComment(postId, form).then(data=>{
                console.log(data);
                setForm("");
            }).catch(console.error);
        }
    }

    if (!user) return;


    return (
        <Collapse in={open}>
            <div id="commentcollapes" className="mt-4 pt-4 border-top">
                <ul className="list-inline m-o p-0 comment-list">
                    {comments.map((comment) => (
                        <Comment key={comment.id} user={user} comment={comment} />
                    ))}
                </ul>
                <div className="add-comment-form-block">
                    <div className="d-flex align-items-center gap-3">
                        <div className="flex-shrink-0">
                            <img
                                src={user.profilePicture}
                                alt="userimg"
                                className="avatar-48 rounded-circle img-fluid"
                                loading="lazy"
                            />
                        </div>
                        <div className="add-comment-form">
                            <form onSubmit={handleSubmitComment}>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="content"
                                    placeholder="Write a Comment..."
                                    value={form}
                                    onChange={(e)=>setForm(e.target.value)}
                                />
                                <button
                                    type="submit"
                                    className="btn btn-primary font-size-12 text-capitalize px-5"
                                >
                                    post
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </Collapse>
    )
}