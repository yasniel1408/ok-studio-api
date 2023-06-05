"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const encryptPassword_1 = __importDefault(require("./password/encryptPassword"));
const run = () => __awaiter(void 0, void 0, void 0, function* () {
    const orm = new client_1.PrismaClient();
    // users
    yield orm.user.create({
        data: {
            id: '0u',
            password: yield (0, encryptPassword_1.default)('admin'),
            name: 'ADMIN',
            email: 'admin@gmail.com',
            role: 'ADMIN'
        }
    });
    yield orm.user.create({
        data: {
            id: '1u',
            password: yield (0, encryptPassword_1.default)('pepita123'),
            name: 'pepita',
            email: 'pepita@gmail.com',
            role: 'USER'
        }
    });
    yield orm.user.create({
        data: {
            id: '2u',
            password: yield (0, encryptPassword_1.default)('juanito123'),
            name: 'juanito',
            email: 'juanito@gmail.com',
            role: 'USER'
        }
    });
    // types
    yield orm.type.create({ data: { id: '1t', name: 'BODA' } });
    yield orm.type.create({ data: { id: '2t', name: 'QUINCEAÑERAS' } });
    yield orm.type.create({ data: { id: '3t', name: 'NIÑOS' } });
    // Object
    yield orm.object.create({
        data: {
            id: '1o',
            name: 'jarra',
            description: 'jarra de barro con foto del estudio',
            price: 90,
            category: 'Category A',
            subcategory: 'Subcategory AA',
            typeId: '1t'
        }
    });
    yield orm.object.create({
        data: {
            id: '2o',
            name: 'llavero',
            description: 'llavero con fotos de la quinceañera',
            price: 120,
            category: 'Category B',
            subcategory: 'Subcategory BB',
            typeId: '2t'
        }
    });
    yield orm.object.create({
        data: {
            id: '3o',
            name: 'apk',
            description: 'apk con fotos de la quinceañera',
            price: 50,
            category: 'Category B',
            subcategory: 'Subcategory BB',
            typeId: '2t'
        }
    });
    yield orm.object.create({
        data: {
            id: '4o',
            name: 'ampliación',
            description: 'ampliación con foto de 24X32',
            price: 50,
            category: 'Category D',
            subcategory: 'Subcategory DD',
            typeId: '3t'
        }
    });
    // ObjectImage
    yield orm.objectImage.create({
        data: {
            id: '1oi',
            objectId: '1o',
            url: 'https://static3.marialunarillos.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/j/a/jarra-roja-450-ml---ib-laursen.jpg'
        }
    });
    yield orm.objectImage.create({
        data: {
            id: '2oi',
            objectId: '2o',
            url: 'https://i.ebayimg.com/images/g/wcEAAOSwkhNazQEE/s-l300.jpg'
        }
    });
    yield orm.objectImage.create({
        data: {
            id: '3oi',
            objectId: '3o',
            url: 'https://image.winudf.com/v2/image1/Y29tLmFuZHJvbW8uZGV2NzQyNjc1LmFwcDk1MDYwOV9zY3JlZW5fMV8xNTY2ODQ4NzYzXzA2Ng/screen-1.jpg?fakeurl=1&type=.jpg'
        }
    });
    yield orm.objectImage.create({
        data: {
            id: '4oi',
            objectId: '4o',
            url: 'https://ae01.alicdn.com/kf/H2c636d23939143e6b7a64168662e0129r/Vinatge-Ball-Gown-Quinceanera-Dresses-Puffy-Skirt-Sweet-16-Dress-Beaded-Lace-Applique-Long-Prom-Gowns.jpg_Q90.jpg_.webp'
        }
    });
    // FavoriteObjectsUser
    yield orm.favoriteObjectsUser.create({
        data: {
            id: '1fou',
            objectId: '1o',
            userId: '1u'
        }
    });
    yield orm.favoriteObjectsUser.create({
        data: {
            id: '2fou',
            objectId: '2o',
            userId: '1u'
        }
    });
    yield orm.favoriteObjectsUser.create({
        data: {
            id: '3fou',
            objectId: '3o',
            userId: '1u'
        }
    });
    yield orm.favoriteObjectsUser.create({
        data: {
            id: '4fou',
            objectId: '4o',
            userId: '1u'
        }
    });
    yield orm.favoriteObjectsUser.create({
        data: {
            id: '5fou',
            objectId: '1o',
            userId: '2u'
        }
    });
    yield orm.favoriteObjectsUser.create({
        data: {
            id: '6fou',
            objectId: '2o',
            userId: '2u'
        }
    });
    yield orm.favoriteObjectsUser.create({
        data: {
            id: '7fou',
            objectId: '3o',
            userId: '2u'
        }
    });
    yield orm.favoriteObjectsUser.create({
        data: {
            id: '8fou',
            objectId: '4o',
            userId: '2u'
        }
    });
    // Client
    yield orm.client.create({
        data: {
            id: '1c',
            name: 'Fernanda Mi Socia',
            age: 14,
            homePhone: '123456',
            mobile: '654321',
            notes: 'Esta es la hija de fulana que vive al doblar de la esquina'
        }
    });
    yield orm.client.create({
        data: {
            id: '2c',
            name: 'Maria Luisa Ruz Chavez',
            age: 14,
            homePhone: '456789',
            mobile: '987654',
            notes: 'Esta es nieta de Pepa la hermana de la iglesia'
        }
    });
    yield orm.client.create({
        data: {
            id: '3c',
            name: 'Mario Perez Perez',
            age: 9,
            homePhone: '987654',
            mobile: '456789',
            notes: 'Esta es para fotos de niño'
        }
    });
    yield orm.client.create({
        data: {
            id: '4c',
            name: 'Lidia Rosa Padilla',
            age: 24,
            homePhone: '741258',
            mobile: '852147',
            notes: 'Esta es para fotos de boda esta es la novia de Juan'
        }
    });
    yield orm.client.create({
        data: {
            id: '5c',
            name: 'Juan Fernando Resile',
            age: 29,
            homePhone: '741258',
            mobile: '852147',
            notes: 'Esta es para fotos de boda esta es el novio de Lidia'
        }
    });
    yield orm.client.create({
        data: {
            id: '6c',
            name: 'Periquito Rodrigues',
            age: 9,
            homePhone: '159263',
            mobile: '362951',
            notes: 'Esta es para fotos de niño'
        }
    });
    yield orm.client.create({
        data: {
            id: '7c',
            name: 'Nixi Suares Perez',
            age: 12,
            homePhone: '748159',
            mobile: '951847',
            notes: 'Esta es para fotos de niño'
        }
    });
    // Contract
    yield orm.contract.create({
        data: {
            id: '1ct',
            name: 'Contrato Nixi Suares Perez',
            typeId: '3t'
        }
    });
    yield orm.contract.create({
        data: {
            id: '2ct',
            name: 'Contrato Periquito Rodrigues',
            typeId: '3t'
        }
    });
    yield orm.contract.create({
        data: {
            id: '3ct',
            name: 'Contrato Fernanda Mi Socia',
            typeId: '2t'
        }
    });
    yield orm.contract.create({
        data: {
            id: '4ct',
            name: 'Contrato Maria Luisa',
            typeId: '2t'
        }
    });
    yield orm.contract.create({
        data: {
            id: '5ct',
            name: 'Contrato Mario Perez',
            typeId: '3t'
        }
    });
    yield orm.contract.create({
        data: {
            id: '6ct',
            name: 'Contrato Lidia y Juan',
            typeId: '1t'
        }
    });
    // Appointment
    yield orm.appointment.create({
        data: {
            id: '1apt',
            clientId: '7c',
            accepted: 'ACEPTADO',
            contractId: '1ct',
            notes: 'Fotos de niña en la playa y el prado'
        }
    });
    yield orm.appointment.create({
        data: {
            id: '2apt',
            clientId: '6c',
            accepted: 'ACEPTADO',
            contractId: '2ct',
            notes: 'Fotos de niño estudio y el cayo'
        }
    });
    yield orm.appointment.create({
        data: {
            id: '3apt',
            clientId: '5c',
            accepted: 'ACEPTADO',
            contractId: '6ct',
            notes: 'Fotos de boda en estudio en el cayo y en la playa'
        }
    });
    yield orm.appointment.create({
        data: {
            id: '4apt',
            clientId: '3c',
            accepted: 'ACEPTADO',
            contractId: '5ct',
            notes: ''
        }
    });
    yield orm.appointment.create({
        data: {
            id: '5apt',
            clientId: '2c',
            accepted: 'ACEPTADO',
            contractId: '4ct',
            notes: ''
        }
    });
    yield orm.appointment.create({
        data: {
            id: '6apt',
            clientId: '1c',
            accepted: 'ACEPTADO',
            contractId: '3ct',
            notes: ''
        }
    });
    // SampleImage
    // niño
    yield orm.sampleImage.create({
        data: {
            typeId: '3t',
            url: 'https://scontent-frt3-2.xx.fbcdn.net/v/t39.30808-6/277762185_271501155198755_8518892119622023994_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=IYgTWReoni8AX8d4iRX&_nc_ht=scontent-frt3-2.xx&oh=00_AT9aQ_inkO1_BxuB1QahT37gUnEmv6_fyOcrHtUZOhGd9A&oe=6256AC7D'
        }
    });
    yield orm.sampleImage.create({
        data: {
            typeId: '3t',
            url: 'https://scontent-frt3-1.xx.fbcdn.net/v/t39.30808-6/277790960_271501228532081_9135950017925961347_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=VCycENGYrJoAX-cgnxV&_nc_ht=scontent-frt3-1.xx&oh=00_AT9QXsq7W4hQorpAAynxcgH32S_-zodpnTgIpBp47heaEw&oe=6257143D'
        }
    });
    yield orm.sampleImage.create({
        data: {
            typeId: '3t',
            url: 'https://scontent-frx5-1.xx.fbcdn.net/v/t39.30808-6/278179188_270816251933912_5582253052198770723_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=unglNFoVrYkAX9x78Cr&_nc_ht=scontent-frx5-1.xx&oh=00_AT_MPpTgeTybSajUZpyVlLa1HjqFkjhQFSR7tTZRbzYoiQ&oe=62563BC4'
        }
    });
    yield orm.sampleImage.create({
        data: {
            typeId: '3t',
            url: 'https://scontent-frx5-1.xx.fbcdn.net/v/t39.30808-6/278179188_270816251933912_5582253052198770723_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=unglNFoVrYkAX9x78Cr&_nc_ht=scontent-frx5-1.xx&oh=00_AT_MPpTgeTybSajUZpyVlLa1HjqFkjhQFSR7tTZRbzYoiQ&oe=62563BC4'
        }
    });
    yield orm.sampleImage.create({
        data: {
            typeId: '3t',
            url: 'https://scontent-frx5-1.xx.fbcdn.net/v/t39.30808-6/278158067_270816201933917_538368125256259964_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=dsc3tegQD9cAX8_rtp3&_nc_ht=scontent-frx5-1.xx&oh=00_AT85dBr09wRz6H4WqOUjDN_JHiT-nUgydcDTWmLpb53yiw&oe=62574ED6'
        }
    });
    yield orm.sampleImage.create({
        data: {
            typeId: '3t',
            url: 'https://scontent-frx5-1.xx.fbcdn.net/v/t39.30808-6/278074511_270225561992981_8171592120644093187_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=x2J496oQ7FEAX8XJ3f0&_nc_ht=scontent-frx5-1.xx&oh=00_AT9Ulcj4R62YMMhTVtPtM_xWDz6zNd4p97iFixOlqJGVJw&oe=62565916'
        }
    });
    yield orm.sampleImage.create({
        data: {
            typeId: '3t',
            url: 'https://scontent-frx5-1.xx.fbcdn.net/v/t39.30808-6/277562895_270225598659644_973395145159079030_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=QvY3bLVMSe4AX-a-Hjt&_nc_oc=AQlf8xyUw0QLVlmQPxq-QW8v9Kl2gHrwOx7SAbYskANFoEuKs7EBM01WGWem85JQb50&_nc_ht=scontent-frx5-1.xx&oh=00_AT-xC4kNSb_LNA3naUIAsb8SsZpbCPMlTSpyvC4Zfgs6LA&oe=6256D802'
        }
    });
    yield orm.sampleImage.create({
        data: {
            typeId: '3t',
            url: 'https://scontent-frt3-1.xx.fbcdn.net/v/t39.30808-6/277587975_269549798727224_2818959599562839641_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=Xklllleqr6IAX84N45f&_nc_ht=scontent-frt3-1.xx&oh=00_AT_G28ldOrR2_KbOJy5btAath3_Me4rkiTFtLVzCsg9GmQ&oe=62570254'
        }
    });
    yield orm.sampleImage.create({
        data: {
            typeId: '3t',
            url: 'https://scontent-frt3-1.xx.fbcdn.net/v/t39.30808-6/277577224_269549765393894_2171439663787075313_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=VboZX2zswAYAX9_VEP1&_nc_ht=scontent-frt3-1.xx&oh=00_AT9jo1XmoEGr3qpFPJ1QUgKchJMs1tZM5u09ETa3sFHQ6Q&oe=6257E62E'
        }
    });
    yield orm.sampleImage.create({
        data: {
            typeId: '3t',
            url: 'https://scontent-frx5-1.xx.fbcdn.net/v/t39.30808-6/277522707_267579505590920_3119878822968696055_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=6qacSFnFboEAX_Vq8F9&_nc_ht=scontent-frx5-1.xx&oh=00_AT9c0S6bbIXKexV25Zzy21BYfE39IMZwEIvkiBJ4CMAZRw&oe=62566ACB'
        }
    });
    yield orm.sampleImage.create({
        data: {
            typeId: '3t',
            url: 'https://scontent-frt3-1.xx.fbcdn.net/v/t39.30808-6/277756108_267579448924259_1468278065236431215_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=mClN3j2y0S0AX-uPqme&_nc_ht=scontent-frt3-1.xx&oh=00_AT8IdGJjbWaDv9dKoMRm-iqirP_nzHXs_zfT22GwEMwysQ&oe=6256DA5B'
        }
    });
    yield orm.sampleImage.create({
        data: {
            typeId: '3t',
            url: 'https://scontent-frt3-1.xx.fbcdn.net/v/t39.30808-6/277777319_266907778991426_117945621579220392_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=EhgLHIeYhaQAX_83H4l&_nc_ht=scontent-frt3-1.xx&oh=00_AT-ojNils4TKJNvPuP5PJvN16w2gj-Z8zd8sNSIjk4jIdA&oe=6256BBC2'
        }
    });
    yield orm.sampleImage.create({
        data: {
            typeId: '3t',
            url: 'https://scontent-frx5-1.xx.fbcdn.net/v/t39.30808-6/277175956_265629259119278_6583668176852948106_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=2IU-1on98H4AX8gnHRS&_nc_ht=scontent-frx5-1.xx&oh=00_AT-1BrEb-JsRUUMeuHoeNwF7QwmbjipWv3tmibVcXEUF_A&oe=62572EE0'
        }
    });
    yield orm.sampleImage.create({
        data: {
            typeId: '3t',
            url: 'https://scontent-frx5-1.xx.fbcdn.net/v/t39.30808-6/277587142_265629735785897_4767489047890586838_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=veujyfAfdiIAX9LVfoy&_nc_oc=AQlkeqASPasvHnHAMT8F7KauWADq3eQC_Vf9ZRWcVCHGrXQ_cnqjL9Gfim3S9PLALPo&_nc_ht=scontent-frx5-1.xx&oh=00_AT_yTvCmCRT6-0Q9dgSf6useHWEtnHZJuSdkFvt2kugRSg&oe=62574E34'
        }
    });
    // boda
    yield orm.sampleImage.create({
        data: {
            typeId: '1t',
            url: 'https://scontent-frx5-1.xx.fbcdn.net/v/t39.30808-6/274727540_242860381396166_2212527665580456927_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=ewQ5n0k2eikAX8f6fpm&_nc_ht=scontent-frx5-1.xx&oh=00_AT_FZBy4ZIWkGoXMXXP_Ru9dirTEdBJy1cigrjNcL4z1-g&oe=625789CD'
        }
    });
    yield orm.sampleImage.create({
        data: {
            typeId: '1t',
            url: 'https://scontent-frx5-1.xx.fbcdn.net/v/t39.30808-6/274237142_242860501396154_7352979817882155332_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=9aZShhhYz7kAX-4ZpPi&_nc_ht=scontent-frx5-1.xx&oh=00_AT-WBYin_wQJQ38HRi8JfI395hCnN0aM9kedyeYeprS09Q&oe=62577931'
        }
    });
    yield orm.sampleImage.create({
        data: {
            typeId: '1t',
            url: 'https://scontent-frt3-1.xx.fbcdn.net/v/t39.30808-6/274269372_242860638062807_4851213231397387424_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=0pyXSOCuNw4AX-rwtrs&_nc_ht=scontent-frt3-1.xx&oh=00_AT--1arTLbrzQfmsIvp4Fj-zimCvQ28Krsp1acOFbVC1lA&oe=625790A6'
        }
    });
    yield orm.sampleImage.create({
        data: {
            typeId: '1t',
            url: 'https://scontent-frt3-1.xx.fbcdn.net/v/t39.30808-6/273446057_234467548902116_8328288241602298936_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=NirE0WdYthkAX9X9_E5&_nc_ht=scontent-frt3-1.xx&oh=00_AT_V-UGjQxs8Yw0nfzXbVsDwEHswkAx8XI6L5Nl5zP6LGA&oe=6256A2CA'
        }
    });
    yield orm.sampleImage.create({
        data: {
            typeId: '1t',
            url: 'https://scontent-frx5-2.xx.fbcdn.net/v/t39.30808-6/273617879_234467735568764_2692695325620849110_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=Dave1cMXjnoAX9gBslk&_nc_ht=scontent-frx5-2.xx&oh=00_AT9Q42Y8oAMQrrHvRI8PE8QROWM2p_sphUEI-Pjy3t0X1Q&oe=6256E302'
        }
    });
    yield orm.sampleImage.create({
        data: {
            typeId: '1t',
            url: 'https://scontent-frx5-1.xx.fbcdn.net/v/t39.30808-6/273013370_232445735770964_6308324079256621782_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=KYng8Dwu7wQAX92T5vR&_nc_ht=scontent-frx5-1.xx&oh=00_AT9CnjxYreO9mHfvxS2pjS8r3qQtrW4RNMSB26gcnhypQA&oe=62575FC7'
        }
    });
    yield orm.sampleImage.create({
        data: {
            typeId: '1t',
            url: 'https://scontent-frx5-1.xx.fbcdn.net/v/t39.30808-6/273030150_232445835770954_2909226393445002342_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=V1mUx_RBGGsAX__glT6&_nc_ht=scontent-frx5-1.xx&oh=00_AT_c7v3HLvluh-7bleEJtmY5OoJhgTGBKF8ePmc4oVgeXA&oe=625657AC'
        }
    });
    yield orm.sampleImage.create({
        data: {
            typeId: '1t',
            url: 'https://scontent-frt3-2.xx.fbcdn.net/v/t39.30808-6/273307016_232445952437609_4204584035432661284_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=moVxVX3_oMoAX9QkAVK&_nc_ht=scontent-frt3-2.xx&oh=00_AT8L0BOlNsvigNwOJxbpzlCgSIXzNb3CHbN4v6r5ZW-vxw&oe=6256C7B0'
        }
    });
    yield orm.sampleImage.create({
        data: {
            typeId: '1t',
            url: 'https://scontent-frt3-1.xx.fbcdn.net/v/t39.30808-6/272880271_226159009732970_5790346728613925936_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=RnMAdUGWRgYAX-leZ1p&_nc_ht=scontent-frt3-1.xx&oh=00_AT9tZUXajWuqVN2_JE8VNskza_o18Oip2ZSrI4EShdh3SA&oe=6257DDF9'
        }
    });
    yield orm.sampleImage.create({
        data: {
            typeId: '1t',
            url: 'https://scontent-frt3-1.xx.fbcdn.net/v/t39.30808-6/272826072_226159119732959_4825082621656217015_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=ylp-MFFAESsAX_YIUEG&_nc_ht=scontent-frt3-1.xx&oh=00_AT8m9ENp7LZ2qdZoK-xHg88A0uhS84IGBpi53GeCWT_XHA&oe=62569861'
        }
    });
    yield orm.sampleImage.create({
        data: {
            typeId: '1t',
            url: 'https://scontent-frt3-1.xx.fbcdn.net/v/t39.30808-6/272826072_226159119732959_4825082621656217015_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=ylp-MFFAESsAX_YIUEG&_nc_ht=scontent-frt3-1.xx&oh=00_AT8m9ENp7LZ2qdZoK-xHg88A0uhS84IGBpi53GeCWT_XHA&oe=62569861'
        }
    });
    yield orm.sampleImage.create({
        data: {
            typeId: '1t',
            url: 'https://scontent-frx5-2.xx.fbcdn.net/v/t39.30808-6/272625652_226159236399614_4478282160982023336_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=bqcESuRg_WYAX_nqeGV&_nc_ht=scontent-frx5-2.xx&oh=00_AT9Mm6U4QdutAMBUaw1MZeKyWljHSWR9Lqb7e9pAj8aPbg&oe=6256FFAC'
        }
    });
    yield orm.sampleImage.create({
        data: {
            typeId: '1t',
            url: 'https://scontent-frt3-2.xx.fbcdn.net/v/t39.30808-6/271841841_215942970754574_5667081633912459329_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=AO2U1ACXZuQAX-P7mF8&_nc_ht=scontent-frt3-2.xx&oh=00_AT-BjfzDsyTrjwQSlbmD3t7YaYmIprgS7sWXobpYEpmo1w&oe=62569E37'
        }
    });
    yield orm.sampleImage.create({
        data: {
            typeId: '1t',
            url: 'https://scontent-frt3-1.xx.fbcdn.net/v/t39.30808-6/271743289_215943030754568_7094262857830176899_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=KEkjaUaS-C0AX9Z68-Z&_nc_ht=scontent-frt3-1.xx&oh=00_AT9moa0OHGVAinPDyalCli9eWm-ibhL2_2e8EBHCmuY72w&oe=62567023'
        }
    });
    yield orm.sampleImage.create({
        data: {
            typeId: '1t',
            url: 'https://scontent-frt3-2.xx.fbcdn.net/v/t39.30808-6/271768869_215943067421231_8403383280753152053_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=BBChmsNaknoAX8mxvUN&_nc_ht=scontent-frt3-2.xx&oh=00_AT_P46djd-WmQQGZitNKbSnPp1QryC81UJ-BRLCsmJaiUg&oe=6256E991'
        }
    });
    // quince
    yield orm.sampleImage.create({
        data: {
            typeId: '2t',
            url: 'data:image/jpeg;base64,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'
        }
    });
    yield orm.sampleImage.create({
        data: {
            typeId: '2t',
            url: 'https://i.pinimg.com/564x/e1/ec/a7/e1eca777b76663db6b767aa532ca4683.jpg'
        }
    });
    yield orm.sampleImage.create({
        data: {
            typeId: '2t',
            url: 'https://i.pinimg.com/564x/fa/e5/33/fae533996e5dee15b86a6db2684e42ce.jpg'
        }
    });
    yield orm.sampleImage.create({
        data: {
            typeId: '2t',
            url: 'https://i.pinimg.com/564x/31/f3/ec/31f3ec52e574f38c79b65f6c31f4943c.jpg'
        }
    });
    yield orm.sampleImage.create({
        data: {
            typeId: '2t',
            url: 'https://i.pinimg.com/564x/e6/7b/76/e67b769554df9c50fca36ff4fc816a90.jpg'
        }
    });
    yield orm.sampleImage.create({
        data: {
            typeId: '2t',
            url: 'https://i.pinimg.com/736x/2e/1c/7b/2e1c7b8784fbd0a7c0bbd60105128ede.jpg'
        }
    });
    yield orm.sampleImage.create({
        data: {
            typeId: '2t',
            url: 'https://i.pinimg.com/564x/32/10/e0/3210e02aad39db582e9e4f3a64d4c07e.jpg'
        }
    });
    yield orm.sampleImage.create({
        data: {
            typeId: '2t',
            url: 'https://i.pinimg.com/564x/d9/b9/8d/d9b98dd658c43bd349f2b5f26344ec1b.jpg'
        }
    });
    yield orm.sampleImage.create({
        data: {
            typeId: '2t',
            url: 'https://i.pinimg.com/564x/73/d6/7c/73d67cecae0e1accb904459f5a056817.jpg'
        }
    });
    yield orm.sampleImage.create({
        data: {
            typeId: '2t',
            url: 'https://i.pinimg.com/736x/61/8b/87/618b87357fd5c8e7b99f029245f7dd82.jpg'
        }
    });
    yield orm.sampleImage.create({
        data: {
            typeId: '2t',
            url: 'https://i.pinimg.com/564x/fb/8c/de/fb8cde66936dbf8c020aa5311dd6cebc.jpg'
        }
    });
    yield orm.sampleImage.create({
        data: {
            typeId: '2t',
            url: 'https://i.pinimg.com/564x/33/de/78/33de78b30f67a1d90603bd2ca1443ddb.jpg'
        }
    });
    yield orm.sampleImage.create({
        data: {
            typeId: '2t',
            url: 'https://i.pinimg.com/564x/9b/77/dd/9b77dd7911db8ee36f59603cf0e45bac.jpg'
        }
    });
    yield orm.sampleImage.create({
        data: {
            typeId: '2t',
            url: 'https://i.pinimg.com/564x/5c/a2/f6/5ca2f6d99aa6dc8d5d59168acdfd156d.jpg'
        }
    });
    yield orm.sampleImage.create({
        data: {
            typeId: '2t',
            url: 'https://i.pinimg.com/564x/2e/81/78/2e8178cfb1768c80769e0bae300b8dc5.jpg'
        }
    });
    yield orm.sampleImage.create({
        data: {
            typeId: '2t',
            url: 'https://i.pinimg.com/564x/61/6e/b3/616eb35aeda2658aefddcd588f00796c.jpg'
        }
    });
    yield orm.sampleImage.create({
        data: {
            typeId: '2t',
            url: 'https://i.pinimg.com/564x/4b/da/11/4bda1187dd8714b2f1f8fd3b289e7b99.jpg'
        }
    });
    yield orm.sampleImage.create({
        data: {
            typeId: '2t',
            url: 'https://i.pinimg.com/564x/5a/a9/17/5aa9175a60de19da6edfe774785ae958.jpg'
        }
    });
    yield orm.sampleImage.create({
        data: {
            typeId: '2t',
            url: 'https://i.pinimg.com/564x/11/92/30/119230568c167e76d3a49870e9673e38.jpg'
        }
    });
    yield orm.sampleImage.create({
        data: {
            typeId: '2t',
            url: 'https://i.pinimg.com/564x/fa/bb/0d/fabb0d457a6485703c213202e489b9dd.jpg'
        }
    });
    yield orm.sampleImage.create({
        data: {
            typeId: '2t',
            url: 'https://i.pinimg.com/564x/4f/85/95/4f8595ac643a8198cec7342c3a2aeb18.jpg'
        }
    });
    yield orm.sampleImage.create({
        data: {
            typeId: '2t',
            url: 'https://i.pinimg.com/564x/9c/71/97/9c719769de8d38e64d95acd375448255.jpg'
        }
    });
    yield orm.sampleImage.create({
        data: {
            typeId: '2t',
            url: 'https://i.pinimg.com/564x/2f/48/f6/2f48f6b132e86c54ae237230f45c4da5.jpg'
        }
    });
    yield orm.sampleImage.create({
        data: {
            typeId: '2t',
            url: 'https://i.pinimg.com/564x/0f/b4/43/0fb443c6c4abf5a41dcc7065c26e3579.jpg'
        }
    });
    yield orm.sampleImage.create({
        data: {
            typeId: '2t',
            url: 'https://i.pinimg.com/564x/52/ae/b1/52aeb13942daad16b72b383aac460fcd.jpg'
        }
    });
    yield orm.sampleImage.create({
        data: {
            typeId: '2t',
            url: 'https://i.pinimg.com/564x/ea/b1/c7/eab1c70fb6ab8ff1615415ee231ca0c7.jpg'
        }
    });
    yield orm.sampleImage.create({
        data: {
            typeId: '2t',
            url: 'https://i.pinimg.com/564x/fa/9e/8a/fa9e8ad25c0d3c6f0f0589314b6bd156.jpg'
        }
    });
    yield orm.sampleImage.create({
        data: {
            typeId: '2t',
            url: 'https://i.pinimg.com/564x/d7/42/10/d74210b87bf1cd7445bc01c7beb2a331.jpg'
        }
    });
    yield orm.sampleImage.create({
        data: {
            typeId: '2t',
            url: 'https://i.pinimg.com/564x/d0/6e/25/d06e254ca90b00140c345b3ee413fe6e.jpg'
        }
    });
});
run();
//# sourceMappingURL=createDataExample.js.map