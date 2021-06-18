import dbContext from './baseDB';
import moment from 'moment';

export default class ContactDB {
    context = new dbContext();

    getContactMessage(callback) {
        this.context.query(`select numero_sequence,
                                    nom_prenom, 
                                    telephone, 
                                    message, 
                                    date_envoie,
                                    ouvert
                            from public.contact_message`, [], (error, results) => {
            if (error) {
                throw error;
            }
            callback(results.rows);
        });
    };

    addContactMessage(datas, callback) {
        var donnees = [
            datas.nom_prenom.trim(),
            datas.telephone.trim(),
            datas.message.trim(),
            moment(datas.date).format('YYYY-MM-DD')
        ];

        this.context.query(`insert into public.contact_message 
                         (nom_prenom, 
                            telephone, 
                            message, 
                            date_envoie)
                  values     
                         ($1, $2, $3, $4)
                  returning numero_sequence`, donnees,
            (error, results) => {
                if (error) {
                    throw error;
                }
                callback(results.rows[0]);
            });
    };
}