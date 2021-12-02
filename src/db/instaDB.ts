import dbContext from './baseDB';

export default class InstaDB {
    context = new dbContext();

    getInstaToken(callback) {
        this.context.query(`select value, last_update
                            from public.config where "key" = $1`, ['insta_access_token'], (error, results) => {
            if (error) {
                throw error;
            }
            callback({ token: results.rows[0].value, last_update: results.rows[0].last_update });
        });
    };

    updateInstaToken(newToken, callback) {
        var donnees = [
            newToken,
            'insta_access_token'
        ];

        this.context.query(`UPDATE public.config
                            SET value=$1
                            WHERE "key"=$2;`, donnees,
            (error, results) => {
                if (error) {
                    throw error;
                }
                callback(true);
            });
    };
}