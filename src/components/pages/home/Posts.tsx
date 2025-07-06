import {IPost} from "../../../../types";
import {Avatar, Box, ImageList, ImageListItem} from "@mui/material";
import {Link} from "react-router-dom";

interface IPosts{
    posts: IPost[]
}

export const Posts = ({posts}:IPosts) => {
    return(
        <>
            {posts.map(post => (
                <ImageList sx={{
                    border: '1px solid #ccc',
                    borderRadius: "10px",
                    padding: 2
                }}>
                    <Link key={post.author._id} to={`/profile/${post.author._id}`} style={{display: 'flex', alignItems: 'center', textDecoration: 'none', color: '#111', marginBottom: 12}}>
                        <Box sx={{position: 'relative', marginRight: 2, overflow: 'hidden', width: 50, height: 50}}>
                            <Avatar src={post.author.avatar} alt=""
                                    sx={{width: 46, height: 46, borderRadius: '50%',}}
                            />
                        </Box>
                        <div>
                            <span style={{fontSize: 14}}>{post.author.name}</span>
                            <span style={{fontSize: 14, opacity: '0.6'}}>{post.createdAt}</span>
                        </div>
                    </Link>

                    <p>
                        {post.content}
                    </p>

                    {post.images?.length && (
                            <ImageList variant="masonry" cols={3} gap={8}>
                                {post.images.map(image => (
                                    <ImageListItem key={image}>
                                        <img
                                            src={image}
                                            alt={''}
                                            loading='lazy'
                                        />
                                    </ImageListItem>
                                ))}
                            </ImageList>
                        )
                    }
                </Box>
            ))}
        </>
    )
}