// Ejemplo de como renderizar un post dinámico

import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
    const post = await prisma.posts.findFirst({
        where: {
            url: ctx.params.url // como-arreglar-humedad
        }
    }) // { id: 2, url: "como-arreglar-humedad", markdownContent: "[This is a link](http://www.google.com)" }

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(post.markdownContent);

    // Use remark to convert markdown into HTML string
    const processedContent = await remark()
        .use(html)
        .process(matterResult.content);
    const contentHtml = processedContent.toString(); // <a href="http://www.google.com">This is a link</a>

    return {
        props: {
            post,
            contentHtml
        },
    };
}

type Props = InferGetServerSidePropsType<typeof getServerSideProps>

const Post = (props: Props) => {
    return (
        <main>
            <h1>Post number {props.id}</h1>
            <p>This post is about {props.name}</p>
            <div dangerouslySetInnerHTML={{ __html: props.contentHtml }} />
            {/* 
                <div>
                    <a href="http://www.google.com">This is a link</a>
                </div>
            */}
        </main>
    )
}

export default Post