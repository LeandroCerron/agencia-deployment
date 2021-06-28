import { Viaje } from "../models/Viaje.js";
import { Testimonial } from "../models/Testimoniales.js";

const pagInicio = async (req, res) => { //req: lo que enviamos - res: lo que express nos responde
    //Consultar 3 viajes del modelo Viaje
    const promiseDB = [];
    promiseDB.push( Viaje.findAll({limit: 3}) );
    promiseDB.push( Testimonial.findAll({limit: 3}) );
    try {
        const resultado = await Promise.all( promiseDB );
        res.render('inicio', {
            pagina: 'Inicio',
            clase: 'home',
            viajes: resultado[0],
            testimoniales: resultado[1]
        });   
    } catch (error) {
        console.log(error);
    }
}

const pagNosotros = (req, res) => { //req: lo que enviamos - res: lo que express nos responde    
        res.render('Nosotros', {
        pagina: 'Nosotros'
    });
}

const pagTestimoniales = async (req, res) => { //req: lo que enviamos - res: lo que express nos responde    
    try {
        const testimoniales = await Testimonial.findAll();

        res.render('Testimoniales', {
            pagina: 'Testimoniales',
            testimoniales
        });   
    } catch (error) {
        console.log(error);
    }
}

const pagViajes = async (req, res) => { //req: lo que enviamos - res: lo que express nos responde    
    //Consultar BD
    const viajes = await Viaje.findAll();
    console.log(viajes);

    res.render('Viajes', {
        pagina: 'Proximos Viajes',
        viajes
    });
}

const pagDetalleViajes = async (req, res) => { //req: lo que enviamos - res: lo que express nos responde
    const {slug} = req.params;
    try {
        const viaje = await Viaje.findOne({ where: { slug } })
        res.render('viaje', {
            pagina: 'Informacion Viaje',
            viaje
        })
    } catch (error) {
        console.log(error);
    }
}

export {
    pagInicio,
    pagNosotros,
    pagTestimoniales,
    pagViajes,
    pagDetalleViajes    
}