import { IoBarChartSharp } from 'react-icons/io5';
import { MdQueryStats } from 'react-icons/md';
import { FaWpforms } from 'react-icons/fa';
import { ImProfile } from 'react-icons/im';
import { v4 as uuidv4 } from 'uuid';

export const links = [
    {
        id : uuidv4(),
        label : "stats",
        path : "/stats",
        icon : <IoBarChartSharp />
    },
    {
        id : uuidv4(),
        label : "profile",
        path : "/",
        icon : <ImProfile />
    },
    {
        id : uuidv4(),
        label : "add jobs",
        path : "/add-jobs",
        icon : < FaWpforms/>
    },
    {
        id : uuidv4(),
        label : "all jobs",
        path : "/all-jobs",
        icon : <MdQueryStats />
    }
]