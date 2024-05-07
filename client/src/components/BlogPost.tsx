import { FaArrowRightLong } from "react-icons/fa6";
import {formatDate} from '../util/utils';

const BlogPost: React.FC<BlogPostData> = ({ blog_title, content, Therapist, updated_at }) => {
  const textClampStyle = {
    display: '-webkit-box',
    WebkitBoxOrient: 'vertical' as any, 
    WebkitLineClamp: 3, 
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  };


  return (
  <div className='cursor-pointer h-[28rem] rounded-md transition duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-1'>
    <img 
        className='w-full h-52 object-cover rounded-md'
        src={"https://www.health.com/thmb/hN-NGS0dEiJc1O1njUcBtH85ggM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/psychiatrist-GettyImages-1433472018-d9221f4efcd34a07bf5e42945696cea6.jpg"} alt="" 
    />
    <div className='px-2'>
        <div className='flex mt-3'>
            <img
                className='w-10 h-10 rounded-full'
                src={"https://hips.hearstapps.com/hmg-prod/images/lionel-messi-celebrates-after-their-sides-third-goal-by-news-photo-1686170172.jpg?crop=0.66653xw:1xh;center,top&resize=640:*"} alt="" 
            />
            <div className='ml-3'>
                <p>{Therapist.User.username}</p>
                <p className='text-sm text-stone-500'>{formatDate(updated_at)}</p>
            </div>
        </div>
        <p className='font-bold mt-3'>
            {blog_title}
        </p>
        <p className='text-sm mt-1'  style={textClampStyle}>
          {content}
        </p>
        <div className='flex items-center mt-2'>
            <p className='text-blue-500 mr-2'>Read More</p>
            <FaArrowRightLong  className="text-blue-400" />
        </div>
    </div>
  </div>
  )
}

export default BlogPost