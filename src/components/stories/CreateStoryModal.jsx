import React, { useState } from 'react';
import PropTypes from 'prop-types';

const CreateStoryModal = ({ isOpen, onClose, onCreateStatus }) => {
    const [content, setContent] = useState('');
    const [duration, setDuration] = useState('5m');
    const [selectedFiles, setSelectedFiles] = useState([]);
    const [previewUrls, setPreviewUrls] = useState([]);
    const [currentPreviewIndex, setCurrentPreviewIndex] = useState(0);

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

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white rounded-lg p-6 w-full max-w-md">
                <h2 className="text-xl font-bold mb-4">Créer un Statut</h2>
                <div className="space-y-4">
                    <div>
                        <input
                            type="text"
                            className="w-full border rounded px-2 py-1"
                            placeholder="Exprimez-vous"
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                        />
                    </div>
                    <div>
                        <input
                            type="text"
                            className="w-full border rounded px-2 py-1"
                            placeholder="Durée du statut"
                            value={duration}
                            onChange={(e) => setDuration(e.target.value)}
                        />
                    </div>
                    <div>
                        <input
                            type="file"
                            accept="image/*,video/*"
                            onChange={handleFileChange}
                            className="w-full"
                            multiple
                        />
                    </div>
                    {previewUrls.length > 0 && (
                        <div className="relative w-full h-64 bg-gray-100 rounded-lg overflow-hidden">
                            {selectedFiles[currentPreviewIndex]?.type.startsWith('image/') ? (
                                <img
                                    src={previewUrls[currentPreviewIndex]}
                                    alt={`Aperçu ${currentPreviewIndex + 1}`}
                                    className="w-full h-full object-contain"
                                />
                            ) : (
                                <video
                                    src={previewUrls[currentPreviewIndex]}
                                    controls
                                    className="w-full h-full object-contain"
                                />
                            )}
                            <button
                                className="absolute top-2 right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center"
                                onClick={() => handleRemoveFile(currentPreviewIndex)}
                            >
                                ×
                            </button>
                            {previewUrls.length > 1 && (
                                <>
                                    <button
                                        className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white rounded-full w-8 h-8 flex items-center justify-center"
                                        onClick={handlePreviousPreview}
                                    >
                                        ←
                                    </button>
                                    <button
                                        className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white rounded-full w-8 h-8 flex items-center justify-center"
                                        onClick={handleNextPreview}
                                    >
                                        →
                                    </button>
                                </>
                            )}
                            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 text-white px-2 py-1 rounded">
                                {currentPreviewIndex + 1} / {previewUrls.length}
                            </div>
                        </div>
                    )}
                </div>
                <div className="flex justify-end space-x-2 mt-4">
                    <button
                        className="px-4 py-2 border rounded"
                        onClick={onClose}
                    >
                        Annuler
                    </button>
                    <button
                        className="px-4 py-2 bg-blue-500 text-white rounded"
                        onClick={handleSubmit}
                    >
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