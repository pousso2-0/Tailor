import Validator from "../../../utilities/Validator";
import React, { useState, useEffect } from 'react'
import { Row, Col, Card, Form, Button } from 'react-bootstrap'
import { toast } from 'react-toastify'
import { userService } from "../../../services/userService";
import img1 from "../../../assets/images/user/user-1.jpg"

const initialFormData = { prenom: '', nom: '', email: '', phone: '', gender: '', location: '', bio: '', profilePicture: '', dateOfBirth: '', websites: [], };

export default function ProfilPersonalInfoForm({ user, setUser }) {
    const [formData, setFormData] = useState(initialFormData);
    const [formErrors, setFormErrors] = useState({});
    const validator = new Validator();


    useEffect(() => {
        if (user) {
            const [prenom, nom] = user.name.split(' ');
            setFormData({
                prenom: prenom || '',
                nom: nom || 'Ciss',
                email: user.email || '',
                phone: user.phone || '',
                gender: user.gender || '',
                location: user.location || '',
                bio: user.bio || '',
                profilePicture: user.profilePicture || '',
                website: user.website || initialFormData.websites,
                dateOfBirth: user.dateOfBirth || initialFormData.dateOfBirth,
            });
        }
    }, [user]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (validator.hasErrors()) {
            setFormErrors(validator.getErrors());
            validator.reset();
            return;
        }

        setFormErrors({});
        
        try {
            formData.name = formData.prenom + " " + formData.nom;
            const userUpdated = await userService.updateProfile(formData);
            setUser(userUpdated.data)
            toast.success('Profil mis à jour avec succès');
        } catch (error) {
            console.error('Erreur lors de la mise à jour du profil:', error);
            toast.error('Erreur lors de la mise à jour du profil');
        }
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setFormData({ ...formData, profilePicture: reader.result });
            };
            reader.readAsDataURL(file);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        validator.reset();
        switch (name) {
            case 'prenom':
                validator.required(value, 'prenom').minLength(3, 'prenom').maxLength(30, 'prenom');
                break;
            case 'nom':
                validator.required(value, 'nom').minLength(3, 'nom').maxLength(30, 'nom');
                break;
            case 'email':
                validator.email(value, 'email');
                break;
            case 'phone':
                validator.senegalPhone(value, 'phone');
                break;
            case 'dateOfBirth':
                validator.date(value, 'Date de naissance');
                break;
            case 'gender':
                validator.inArray(value, ['male', 'female'], 'gender');
                break;

            default:
                break;
        }

        setFormErrors(validator.getErrors());
    };


    return (
        <Card>
            <Card.Header className="d-flex justify-content-between">
                <div className="header-title">
                    <h4 className="card-title">Personal Information</h4>
                </div>
            </Card.Header>
            <Card.Body>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="form-group align-items-center">
                        <Col md="12">
                            <div className="profile-img-edit">
                                <img className="profile-pic" src={formData.profilePicture ?? img1} alt="profile-pic" />
                                <div className="p-image d-flex align-items-center justify-content-center">
                                    <span className="material-symbols-outlined">edit</span>
                                    <input className="file-upload" type="file" accept="image/*" onChange={handleFileChange} />
                                </div>
                            </div>
                        </Col>
                    </Form.Group>
                    <Row className="align-items-center">
                        <Form.Group className="form-group col-sm-6">
                            <Form.Label htmlFor="fname" className="form-label">First Name:</Form.Label>
                            <Form.Control type="text" className="form-control" id="fname" placeholder="Enter your first name" name="prenom" value={formData.prenom} onChange={handleChange} />
                            {formErrors.prenom && <div className="text-danger">{formErrors.prenom}</div>}
                        </Form.Group>
                        <Form.Group className="form-group col-sm-6">
                            <Form.Label htmlFor="lname" className="form-label">Last Name:</Form.Label>
                            <Form.Control type="text" className="form-control" id="lname" placeholder="Enter your last name" name="nom" value={formData.nom} onChange={handleChange} />
                            {formErrors.nom && <div className="text-danger">{formErrors.nom}</div>}
                        </Form.Group>
                        <Form.Group className="form-group col-sm-6">
                            <Form.Label htmlFor="uname" className="form-label">Email:</Form.Label>
                            <Form.Control type="text" className="form-control" id="uname" placeholder="Enter your email" name="email" value={formData.email} onChange={handleChange} />
                            {formErrors.email && <div className="text-danger">{formErrors.email}</div>}
                        </Form.Group>
                        <Form.Group className="form-group col-sm-6">
                            <Form.Label htmlFor="cname" className="form-label">Phone Number:</Form.Label>
                            <Form.Control type="text" className="form-control" id="cname" placeholder="Enter your phone number" name="phone" value={formData.phone} onChange={handleChange} />
                            {formErrors.phone && <div className="text-danger">{formErrors.phone}</div>}
                        </Form.Group>
                        <Form.Group className="form-group col-sm-6">
    <Form.Label className="form-label d-block">Gender:</Form.Label>
    <Form.Check className="form-check form-check-inline">
        <Form.Check.Input
            className="form-check-input"
            checked={formData.gender === 'male'}
            type="radio"
            name="gender"
            id="inlineRadio10"
            value="male"
            onChange={handleChange}
        />
        <Form.Check.Label className="form-check-label" htmlFor="inlineRadio10">Male</Form.Check.Label>
    </Form.Check>{" "}
    <Form.Check className="form-check form-check-inline">
        <Form.Check.Input
            className="form-check-input"
            checked={formData.gender === 'female'}
            type="radio"
            name="gender"
            id="inlineRadio11"
            value="female"
            onChange={handleChange}
        />
        <Form.Check.Label className="form-check-label" htmlFor="inlineRadio11">Female</Form.Check.Label>
    </Form.Check>
</Form.Group>

                        <Form.Group className="form-group col-sm-6">
                            <Form.Label htmlFor="fname" className="form-label">Adresse:</Form.Label>
                            <Form.Control type="text" className="form-control" id="fname" placeholder="Enter your address" name="location" value={formData.location} onChange={handleChange} />
                        </Form.Group>
                        <Form.Group className="form-group col-sm-6">
                            <Form.Label htmlFor="dob" className="form-label">Date Of Birth:</Form.Label>
                            <Form.Control type="date" className="form-control" id="dob" placeholder="Enter your date of birth" value={formData.dateOfBirth} name="dateOfBirth" onChange={handleChange} />
                            {formErrors.dateOfBirth && <div className="text-danger">{formErrors.dateOfBirth}</div>}
                        </Form.Group>
                        <h5>Social Media Links</h5>


                        <Form.Group className="form-group col-sm-12">
                            <Form.Label className="form-label">Biographie:</Form.Label>
                            <textarea className="form-control" rows={5} style={{ lineHeight: "18px" }}
                                placeholder="Enter your biography"
                                name="bio"
                                value={formData.bio}
                                onChange={handleChange}
                            ></textarea>
                        </Form.Group>
                    </Row>
                    <Button type="submit" className="btn btn-primary me-2">Submit</Button>{" "}
                    <Button type="reset" variant='' className="btn-danger-subtle">Cancel</Button>
                </Form>
            </Card.Body>
        </Card>
    );
}