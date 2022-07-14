import Link from 'next/link';


export default function blogIndex() {
    return (
        <>
            <h1>
                take it slowly and you will find it easy
            </h1>

            <Link href='/'>
                <a> Back to home </a>
            </Link>
        </>
    )
} 