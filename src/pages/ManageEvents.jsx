import MainLayout from '../Layouts/MainLayout'
import { Link } from 'react-router'
const ManageEvents = () => {
    return (
        <MainLayout>
            <div className="pt-5">
                <div className="text-right">
                    <Link to="/add-event" className="btn btn-primary rounded-full ">
                        Add Event
                    </Link>

                </div>
                <div className="pt-5 flex">ManageEvents

                </div>
            </div>
        </MainLayout>
    )
}

export default ManageEvents