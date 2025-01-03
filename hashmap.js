export default class Hashmap {
    constructor(capacity=16,loadfactor=0.75){
        this.capacity=capacity;
        this.loadfactor=loadfactor;
        this.size=0;
        this.buckets=new Array(capacity).fill(null);
    }
   hash(key) {
        let hashCode = 0;  
        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
          hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this.capacity; // Mod 16
        }
        return hashCode;
      } 

    set(key,value){
        
        const index= this.hash(key);
        let isCreated=false;
        //Creo la lista enlazada
        if (!this.buckets[index]) {
          this.buckets[index] = [];
          isCreated=true;
        }
       
  
        if (isCreated){
          this.size++;
          this.buckets[index].push([key,value]);
        }else{
        //   ["key1", "value1"],
        //   ["key2", "value2"]
        // ]
        const bucket = this.buckets[index];
          for (let i=0;i<bucket.length;i++){
            if(bucket[i][0]==key){
              bucket[i][1]=value;
              return;
            }
          }
        }
        if (this.size/this.capacity>this.loadfactor) this.expand();
    }
    expand(){
      this.capacity=this.capacity*2
      const oldBuckets=this.buckets;
      this.buckets=new Array(this.capacity).fill(null);
      this.size=0;
      for (const bucket of oldBuckets){
        if (bucket){
          for (const [key,value] of bucket){
            this.set(key, value, false);
          }
        }
      }
    }
    get(key){
      const index= this.hash(key);
      const bucket = this.buckets[index];
      if (!bucket) {
        return null;
    }
      for (let i=0;i<bucket.length;i++){
        if(bucket[i][0]==key){
          return bucket[i][1];
        }
      }
    }
    has(key){
      if(this.get(key)==null){
        return false;
      }else{
        return true;
      }
    }
    remove(key){
      const index= this.hash(key);
      const bucket = this.buckets[index];
      if (!bucket) {
        return null;
    }
      for (let i=0;i<bucket.length;i++){
        if(bucket[i][0]==key){
          bucket.splice(i, 1);
          this.size--;
          return;
        }
      }
    }
    length(){
      return this.size;
    }
    clear(){
      this.buckets = new Array(this.capacity).fill(null);
      this.size = 0; 
    }
    keys(){
      let keys=[];
      for (const bucket of this.buckets) {
        if (bucket) { 
          for (const [key, value] of bucket) {
            keys.push(key); 
          }
        }
      }
      return keys;
    }
    values(){
        let values=[];
        for (const bucket of this.buckets) {
          if (bucket) { 
            for (const [key, value] of bucket) {
              values.push(value); 
            }
          }
        }
        return values;
      }
    entries(){
        let entries=[];
        for (const bucket of this.buckets) {
          if (bucket) { 
            for (const [key, value] of bucket) {
              entries.push([value,key]); 
            }
          }
        }
        return entries;
      }
    }
  export class HashSet extends Hashmap{
    set(key){
      const index= this.hash(key);
      if (!this.buckets[index]) {
        this.buckets[index] = [];
      }
      const bucket = this.buckets[index];
      for (const existingKey of bucket) {
        if (existingKey === key) {
          return; // La clave ya existe, no hacer nada
        }
      }
        this.size++;
        bucket.push(key);
    }
    keys(){
      let keys = [];
      for (const bucket of this.buckets) {
        if (bucket) {
          // Agregar todas las claves del bucket
          keys.push(bucket[0]);
        }
      }
      return keys;
    }
    }
  
    
    