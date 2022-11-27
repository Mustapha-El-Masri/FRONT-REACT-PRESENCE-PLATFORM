import nextCookie from 'next-cookies';

export const requirePageAuth = (ctx) => {
    const { token } = nextCookie(ctx);
    const { id } = nextCookie(ctx);

    if (!token) {
        return {
            props: {},
            redirect: {
                destination: '/',
                permanent: false
            }
        };
    }

    return { props: { token, id } };
};