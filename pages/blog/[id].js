// đây là components động tạo ra từ [id] truyền vào trong build time
// ta khai báo tên file là [id] là theo cú pháp của nextjs

import Head from 'next/head';
import Layout from '../../components/layout';
import { getAllPostId, getPostData } from '../../libs/post';


export default function Post({ postData }) {
    return <Layout>
        <Head>
            <title>{postData.title}</title>
        </Head>
        <article>
            <h1 className={utilStyles.headingXl}>{postData.title}</h1>
            <div className={utilStyles.lightText}>
                <Date dateString={postData.date} />
            </div>
            <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        </article>
    </Layout>
}

export async function getStaticPaths() {
    const paths = getAllPostId();
    return {
        paths,
        fallback: false,
    };
}

// như đã biết đây cũng là hàm của nextjs dùng để lấy data để render trước trang web
export async function getStaticProps({ params }) {
    const postData = await getPostData(params.id);
    // cần trả về định dạng đúng như thế này
    return {
        props: {
            postData,
        },
    };
}