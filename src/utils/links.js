import { IoBarChartSharp } from 'react-icons/io5';
import { MdQueryStats } from 'react-icons/md';
import { FaWpforms } from 'react-icons/fa';
import { ImProfile } from 'react-icons/im';
import { v4 as uuidv4, v4 } from 'uuid';

export const links = [
    {
        id : v4(),
        label : "stats",
        path : "/",
        icon : <IoBarChartSharp />
    },
    {
        id : v4(),
        label : "profile",
        path : "/profile",
        icon : <ImProfile />
    },
    {
        id : v4(),
        label : "add jobs",
        path : "/add-jobs",
        icon : < FaWpforms/>
    },
    {
        id : v4(),
        label : "all jobs",
        path : "/all-jobs",
        icon : <MdQueryStats />
    }
]