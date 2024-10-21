import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../../assets/scss/stories.scss';

const CreateStoryModal = ({ isOpen, onClose, onCreateStatus }) => {
    const [content, setContent] = useState('');
    const [duration, setDuration] = useState('5m');
    const [selectedFiles, setSelectedFiles] = useState([]);
    const [previewUrls, setPreviewUrls] = useState([]);
    const [currentPreviewIndex, setCurrentPreviewIndex] = useState(0);

    if (!isOpen) return null;

    const handleFileChange = (event) => {
        const files = Array.from(event.target.files);
        setSelectedFiles(files);
        const urls = files.map(file => URL.createObjectURL(file));
        setPreviewUrls(urls);
        setCurrentPreviewIndex(0);
    };

    const handleRemoveFile = (index) => {
        const newFiles = selectedFiles.filter((_, i) => i !== index);
        const newUrls = previewUrls.filter((_, i) => i !== index);
        setSelectedFiles(newFiles);
        setPreviewUrls(newUrls);
        setCurrentPreviewIndex((prev) => (prev > 0 ? prev - 1 : 0));
    };

    const handlePreviousPreview = () => {
        setCurrentPreviewIndex((prev) => (prev > 0 ? prev - 1 : previewUrls.length - 1));
    };

    const handleNextPreview = () => {
        setCurrentPreviewIndex((prev) => (prev < previewUrls.length - 1 ? prev + 1 : 0));
    };

    const handleSubmit = () => {
        onCreateStatus(content, selectedFiles, duration);
        onClose();
    };

    return (
        <div className="create-story-modal">
            <div className="modal-content">
                <h2>Créer un Statut</h2>
                <div className="form-group">
                    <input
                        type="text"
                        placeholder="Exprimez-vous"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Durée du statut"
                        value={duration}
                        onChange={(e) => setDuration(e.target.value)}
                    />
                    <input
                        type="file"
                        accept="image/*,video/*"
                        onChange={handleFileChange}
                        multiple
                    />
                </div>

                {previewUrls.length > 0 && (
                    <div className="preview-container">
                        {selectedFiles[currentPreviewIndex]?.type.startsWith('image/') ? (
                            <img
                                src={previewUrls[currentPreviewIndex]}
                                alt={`Aperçu ${currentPreviewIndex + 1}`}
                            />
                        ) : (
                            <video
                                src={previewUrls[currentPreviewIndex]}
                                controls
                            />
                        )}
                        <button
                            className="remove-button"
                            onClick={() => handleRemoveFile(currentPreviewIndex)}
                        >
                            ×
                        </button>
                        {previewUrls.length > 1 && (
                            <>
                                <button
                                    className="nav-button prev"
                                    onClick={handlePreviousPreview}
                                >
                                    ←
                                </button>
                                <button
                                    className="nav-button next"
                                    onClick={handleNextPreview}
                                >
                                    →
                                </button>
                            </>
                        )}
                        <div className="preview-controls">
                            {currentPreviewIndex + 1} / {previewUrls.length}
                        </div>
                    </div>
                )}

                <div className="modal-actions">
                    <button className="cancel" onClick={onClose}>
                        Annuler
                    </button>
                    <button className="submit" onClick={handleSubmit}>
                        Créer {selectedFiles.length > 1 ? 'les Stories' : 'la Story'}
                    </button>
                </div>
            </div>
        </div>
    );
};

CreateStoryModal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    onCreateStatus: PropTypes.func.isRequired,
};

export default CreateStoryModal;