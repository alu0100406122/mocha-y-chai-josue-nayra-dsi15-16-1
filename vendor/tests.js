var expect = chai.expect;

//Pruebas para la clase Medida.
describe('Medida', function() {
  
  var medida1 = new Medida("45","km");
  var medida2 = new Medida("45km");
  var medida3 = new Medida("77 m");
  
  
  describe('Construccion',function()
  {
      it('Se crean los objetos medida1, medida2, medida3',function()
      {
        expect(medida1).to.be.an('object');
        expect(medida1).to.exist;
        expect(medida1).to.not.be.null;
        expect(medida2).to.be.an('object');
        expect(medida2).to.exist;
        expect(medida2).to.not.be.null;
        expect(medida3).to.be.an('object');
        expect(medida3).to.exist;
        expect(medida3).to.not.be.null;
      });
      it('Se construye medida pasandole al constructor: Valor y Tipo', function () {
        expect(medida1).to.not.be.null;
        expect(medida1.valor).to.equal(45);
        expect(medida1.tipo).to.equal("km");
      });
      it('Se construye medida pasandole al constructor: Valor',function(){
        expect(medida2.valor).to.not.be.empty;
        expect(medida2.tipo).to.not.be.empty;
        expect(medida2.valor).to.equal(45);
        expect(medida2.tipo).to.equal("km");
      });   
      it('Los objetos medida1, medida2 y medida3 son instancias de Medida',function()
      {
        expect(medida1).to.be.an.instanceof(Medida);
        expect(medida2).to.be.an.instanceof(Medida);
        expect(medida3).to.be.an.instanceof(Medida);
      });
      it('Los objetos medida1, medida2 y medida3 tienen los atributos: valor y tipo',function()
      {
        expect(medida1).to.have.property('valor');
        expect(medida1).to.have.property('tipo');
      });
  });
});