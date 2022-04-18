
import { Spinner } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../../../firebase.init';

const ServiceDetails = () => {

    const {serviceId}= useParams();
    let spin;
    
    return (
        <div>
           Your package number is {serviceId}
           {spin}
        </div>
    );
};

export default ServiceDetails;