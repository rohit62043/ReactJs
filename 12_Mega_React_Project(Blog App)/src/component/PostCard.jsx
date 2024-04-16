import appwriteService from "../appwrite/config";
import { Link } from 'react-router-dom';

function PostCard({ $id, title, featuredimage }) {
    return (
        <Link to={`/post/${$id}`}>
            <div className='w-full bg-white rounded-xl p-4 shadow-md border border-gray-400 transition duration-300 hover:shadow-lg'>
                <div className='w-full justify-center mb-4'>
                    <img
                        src={appwriteService.getFilePreview(featuredimage)}
                        alt={title}
                        className='rounded-xl w-full h-auto'
                    />
                </div>
                <h2 className='text-xl font-bold text-gray-800'>{title}</h2>
            </div>
        </Link>
    );
}

export default PostCard;
