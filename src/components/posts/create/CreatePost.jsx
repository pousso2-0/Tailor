import React, { useState } from "react";
import { postService } from "../../../services/postService";
import { useAuth } from "../../../context/AuthContext";
// import PostForm from "./PostForm";
import PostForm from "./PorstForm";
import PostModalForm from "./PostModalForm";
import { toast } from "react-toastify";

const CreatePost = ({ user, setUser }) => {
    const [show, setShow] = useState(false);
    const [postContent, setPostContent] = useState("");
    const [isLocked, setIsLocked] = useState(false);
    const [medias, setMedias] = useState([]);
    const [previewUrl, setPreviewUrl] = useState(null);
    const { isAuthenticated } = useAuth();

    const handleClose = () => {
        setShow(false);
        resetForm();
    };

    const handleShow = () => {
        if (!user || user.type !== "TAILLEUR") {
            toast.error("Seuls les TAILLEURS peuvent créer des posts.");
            return;
        }
        setShow(true);
    };

    const resetForm = () => {
        setPostContent("");
        setIsLocked(false);
        setMedias([]);
        setPreviewUrl(null);
    };

    const handleMediaChange = (e) => {
        const filesArray = Array.from(e.target.files);

        const mediaData = filesArray.map((file) => {
            if (file && (file.type.startsWith("image") || file.type.startsWith("video"))) {
                setPreviewUrl(URL.createObjectURL(file));
                return { file, type: file.type.startsWith("image") ? "IMAGE" : "VIDEO" };
            } else {
                toast.error("Veuillez sélectionner une image ou une vidéo valide.");
                return null;
            }
        }).filter(Boolean);

        setMedias(mediaData);
    };

    const handlePostSubmit = async (e) => {
        e.preventDefault();

        if (!isAuthenticated) {
            toast.error("Vous devez être connecté pour créer un post.");
            return;
        }

        if (!user || user.type !== "TAILLEUR") {
            toast.error("Seuls les TAILLEURS peuvent créer des posts.");
            return;
        }

        try {
            const formData = new FormData();
            formData.append('content', postContent);
            formData.append('isLocked', isLocked);
            formData.append('userId', user.id);

            // Modification de la façon dont les médias sont ajoutés
            if (medias.length) {
                medias.forEach((media, index) => {
                    formData.append(`media`, media.file);
                    formData.append(`mediaType`, media.type);
                });
            }

            const response = await postService.createPost(formData);
            console.log("Post créé:", response.data);
            toast.success("Post créé avec succès");

            resetForm();
            handleClose();
        } catch (error) {
            console.error("Erreur lors de la création du post:", error);
            if (error.response) {
                console.error("Réponse du serveur:", error.response.data);
                toast.error(`Erreur: ${error.response.data.message}`);
            } else {
                toast.error("Une erreur s'est produite lors de la création du post.");
            }
        }
    };

    if (!isAuthenticated || !user) {
        return null;
    }

    return (
        <>
            <PostForm
                user={user}
                handleShow={handleShow}
            />

            <PostModalForm
                handlePostSubmit={handlePostSubmit}
                show={show}
                handleClose={handleClose}
                previewUrl={previewUrl}
                handleMediaChange={handleMediaChange}
                postContent={postContent}
                setPostContent={setPostContent}
                isLocked={isLocked}
                setIsLocked={setIsLocked}
            />
        </>
    );
};

export default CreatePost;