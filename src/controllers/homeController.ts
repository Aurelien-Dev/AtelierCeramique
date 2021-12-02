import { Request, Response, NextFunction } from 'express';
import instaService from '../service/InstagramRestorToken'

export async function index(req: Request, res: Response, next: NextFunction) {

    var service = new instaService()
    await service.RestorAccessToken();

    service.GetMediaFromInsta((medias) => {
        res.render('home/index', {
            title_extra: '- Boutique',
            medias: medias.data,
            paging: medias.paging
        });
    });
}

export function pos(req: Request, res: Response, next: NextFunction) {
    res.render('home/pos', {
        title_extra: '- Point de vente'
    });
}

export function cgv(req: Request, res: Response, next: NextFunction) {
    res.render('home/cgv', {
        title_extra: '- Conditions générales de vente'
    });
}

export function tracabilite(req: Request, res: Response, next: NextFunction) {
    res.render('home/tracabilite', {
        title_extra: '- Tracabilité des matières premières'
    });
}