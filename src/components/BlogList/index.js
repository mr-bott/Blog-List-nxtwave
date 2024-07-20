// Write your JS code here
import './index.css'
const BlogList = props => {
  const {details} = props
  const {title, description, publishedDate} = details
  return (
    <li className="li">
      <div className="end">
        <h1 className="h1">{title}</h1>
        <p className="p">{publishedDate}</p>
      </div>
      <p className="p">{description}</p>
      <hr className="hr" />
    </li>
  )
}
export default BlogList
