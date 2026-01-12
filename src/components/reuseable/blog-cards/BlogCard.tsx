import { FC } from 'react';
import Link from 'next/link';
import NextLink from '../links/NextLink';
import FigureImage from 'components/reuseable/FigureImage';

// ========================================================
type BlogCard3Props = {
  link: string;
  title: string;
  image: string;
  category: string;
  description: string;
};
// ========================================================

const BlogCard: FC<any> = (props) => {
  const { title, date_time, id, slug, blog_thumbnail } = props;

  return (
    <article className="item post col-md-6">
      <div className="card">
        <figure className="card-img-top overlay overlay-1 hover-scale">
          <Link href={`/blog/${slug}`} passHref legacyBehavior>
            <a>
              <img style={{width:"100%",height:"300px"}} src={blog_thumbnail} />
              <span className="bg" />
            </a>
          </Link>

          <figcaption>
            <h5 className="from-top mb-0">Read More</h5>
          </figcaption>
        </figure>

        <div className="py-1 px-3">
          <div className="post-header">
            <h2 className="post-title h3 mt-1 mb-3">
              {/* <NextLink title={title} className="link-dark" href={`/blog/${slug}`} /> */}
              <Link className="link-dark" href={`/blog/${slug}`} >
                {title?.substring(0,25)}...
              </Link>
            </h2>
          </div>

          {/* <div className="post-content">
            <p>{description}</p>
          </div> */}
        </div>

        <div className="card-footer py-2 px-3">
          <ul className="post-meta d-flex mb-0">
            <li className="post-date">
              <i className="uil uil-calendar-alt" />
              <span>{new Date(date_time)?.getDate()+"-"+(Number(new Date(date_time)?.getMonth())+1)+"-"+new Date(date_time)?.getFullYear()+"   "+new Date(date_time)?.getHours()+":"+new Date(date_time)?.getMinutes()}</span>
            </li>
          </ul>
        </div>
      </div>
    </article>
  );
};

export default BlogCard;
