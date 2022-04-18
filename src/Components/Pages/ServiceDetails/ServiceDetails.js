
import { useParams } from 'react-router-dom';

const ServiceDetails = () => {
    
    const {serviceId}= useParams();
    return (
        <div>
           Your package number is {serviceId}
        </div>
    );
};

export default ServiceDetails;