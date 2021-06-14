import express from 'express';
import homeRouter from './routers/homeRouter';
import expressHandle from 'express-handlebars';
import path from 'path';
require('dotenv').config();
require('./utils/helpers');


export default class Server {
  app = express();

  /**
   * Initialisation du moteur de rendu
   */
  initEngineMotor() {
    var hbs = expressHandle.create({
      layoutsDir: path.join(__dirname, '/views/layout'),
      defaultLayout: 'mainLayout',
    });

    this.app.set('views', path.join(__dirname, '/views'));

    this.app.use(express.static(__dirname + '/public'));

    this.app.engine('handlebars', hbs.engine);
    this.app.set('view engine', 'handlebars');
  }

  /**
   * Initialisation des controlleurs
   */
  initControllers() {
    this.app.use('/home', homeRouter);
    this.app.use('/', homeRouter);
  }

  /**
   * Permet de démarer le serveur web
   */
  startServer() {
    this.initEngineMotor();
    this.initControllers();

    this.app.set('port', process.env.PORT || 3001);

    this.app.listen(this.app.get('port'), () => {
      console.log(
        'Server start - Server web started on port http://127.0.0.1:' +
        this.app.get('port')
      );
    });
  }
}
