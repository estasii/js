function Cattle (brand, maxVolume, minVolume, currentVolume,){
    this.brand = brand;
    this.maxVolume = maxVolume;
    this.minVolume = minVolume;
    this.currentVolume =0;
    this.stop + function(){
       return (this.currentVolume =0);
    };
    this.addWater = function(value){
       if(this.currentVolume+value >=maxVolume)
       this.currentVolume -= this.maxVolume;
    } else{
       this.currentVolume += value;
    }
   this.makeTea = function(value){
    this.currentValue -=value
   }
 }
 const cattle = new Cattle('Redmond', 5, 1);
 console.log(cattle.addWater(2))
 console.log(cattle.makeTea(1))