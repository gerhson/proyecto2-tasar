

const DATA = {
  "Miraflores": {
    type: ["Departamento", "Casa", "Terreno"],
    zones: {
      "Malecones/Parques (Prime)": 11000,
      "Central": 9000,
      "Baja/Periférica": 7500,
      "Cercano a Malecón": 10000,
      "Limite Sur": 8500,
      "Limite Norte": 8000,
      "Zona Alta": 9500
    }
  },
  "San Isidro": {
    type: ["Departamento", "Casa", "Terreno"],
    zones: {
      "Prime": 12000,
      "Central": 9500,
      "Periférica": 8200,
      "Zona Residencial": 11000,
      "Limite Sur": 9000,
      "Limite Norte": 8800,
      "Zona Alta": 10500
    }
  },
  "Barranco": {
    type: ["Departamento", "Casa", "Terreno"],
    zones: {
      "Malecón": 9700,
      "Central": 8400,
      "Periférica": 7000,
      "Zona Sur": 9000,
      "Zona Norte": 7800,
      "Cercano a Plaza": 8800,
      "Altura": 9200
    }
  },
  "San Borja": {
    type: ["Departamento", "Casa", "Terreno"],
    zones: {
      "Cercano a parques": 7200,
      "Central": 6900,
      "Periférica": 6500,
      "Zona Norte": 6700,
      "Zona Sur": 6800,
      "Zona Alta": 7000,
      "Zona Baja": 6600
    }
  },
  "La Molina": {
    type: ["Departamento", "Casa", "Terreno"],
    zones: {
      "La Molina Vieja": 7000,
      "Central": 6700,
      "Periférica": 6300,
      "Zona Residencial": 6900,
      "Zona Norte": 6500,
      "Zona Sur": 6800,
      "Zona Alta": 7100
    }
  },
  "Jesús María": {
    type: ["Departamento", "Casa", "Terreno"],
    zones: {
      "Central": 7229,
      "Periférica": 6900,
      "Zona Norte": 7100,
      "Zona Sur": 7300,
      "Zona Alta": 7400,
      "Zona Baja": 7000,
      "Cercano a Plaza": 7500,
      "Altura": 7600
    }
  },
  "Lince": {
    type: ["Departamento", "Casa", "Terreno"],
    zones: {
      "Central": 7200,
      "Periférica": 6900,
      "Zona Norte": 7100,
      "Zona Sur": 7300,
      "Zona Alta": 7400,
      "Zona Baja": 7000,
      "Cercano a Plaza": 7500,
      "Altura": 7600
    }
  },
  "Magdalena del Mar": {
    type: ["Departamento", "Casa", "Terreno"],
    zones: {
      "Central": 6904,
      "Periférica": 6600,
      "Zona Norte": 6800,
      "Zona Sur": 7000,
      "Zona Alta": 7100,
      "Zona Baja": 6700,
      "Cercano a Plaza": 7400,
      "Altura": 7500
    }
  },
  "Pueblo Libre": {
    type: ["Departamento", "Casa", "Terreno"],
    zones: {
      "Central": 6301,
      "Periférica": 6000,
      "Zona Norte": 6200,
      "Zona Sur": 6400,
      "Zona Alta": 6500,
      "Zona Baja": 6100,
      "Cercano a Plaza": 6800,
      "Altura": 6900
    }
  },
  "San Miguel": {
    type: ["Departamento", "Casa", "Terreno"],
    zones: {
      "Central": 6074,
      "Periférica": 5800,
      "Zona Norte": 6000,
      "Zona Sur": 6200,
      "Zona Alta": 6300,
      "Zona Baja": 5900,
      "Cercano a Plaza": 6600,
      "Altura": 6700
    }
  },
  "Surquillo": {
    type: ["Departamento", "Casa", "Terreno"],
    zones: {
      "Central": 6661,
      "Periférica": 6400,
      "Zona Norte": 6600,
      "Zona Sur": 6800,
      "Zona Alta": 6900,
      "Zona Baja": 6500,
      "Cercano a Plaza": 7200,
      "Altura": 7300
    }
  },
  "La Victoria": {
    type: ["Departamento", "Casa", "Terreno"],
    zones: {
      "Central": 6661,
      "Periférica": 6400,
      "Zona Norte": 6600,
      "Zona Sur": 6800,
      "Zona Alta": 6900,
      "Zona Baja": 6500,
      "Cercano a Plaza": 7200,
      "Altura": 7300
    }
  },
  "Ate": {
    type: ["Departamento", "Casa", "Terreno"],
    zones: {
      "Central": 4711,
      "Periférica": 4400,
      "Zona Norte": 4600,
      "Zona Sur": 4800,
      "Zona Alta": 4900,
      "Zona Baja": 4500,
      "Cercano a Plaza": 5200,
      "Altura": 5300
    }
  },
  "Breña": {
    type: ["Departamento", "Casa", "Terreno"],
    zones: {
      "Central": 5168,
      "Periférica": 4900,
      "Zona Norte": 5100,
      "Zona Sur": 5300,
      "Zona Alta": 5400,
      "Zona Baja": 5000,
      "Cercano a Plaza": 5700,
      "Altura": 5800
    }
  },
  "Bellavista": {
    type: ["Departamento", "Casa", "Terreno"],
    zones: {
      "Central": 4147,
      "Periférica": 3900,
      "Zona Norte": 4100,
      "Zona Sur": 4300,
      "Zona Alta": 4400,
      "Zona Baja": 4000,
      "Cercano a Plaza": 4700,
      "Altura": 4800
    }
  },
  "La Perla": {
    type: ["Departamento", "Casa", "Terreno"],
    zones: {
      "Central": 4046,
      "Periférica": 3800,
      "Zona Norte": 4000,
      "Zona Sur": 4200,
      "Zona Alta": 4300,
      "Zona Baja": 3900,
      "Cercano a Plaza": 4600,
      "Altura": 4700
    }
  },
  "Los Olivos": {
    type: ["Departamento", "Casa", "Terreno"],
    zones: {
      "Central": 3641,
      "Periférica": 3400,
      "Zona Norte": 3600,
      "Zona Sur": 3800,
      "Zona Alta": 3900,
      "Zona Baja": 3500,
      "Cercano a Plaza": 4200,
      "Altura": 4300
    }
  },
  "San Juan de Miraflores": {
    type: ["Departamento", "Casa", "Terreno"],
    zones: {
      "Central": 3583,
      "Periférica": 3300,
      "Zona Norte": 3500,
      "Zona Sur": 3700,
      "Zona Alta": 3800,
      "Zona Baja": 3400,
      "Cercano a Plaza": 4100,
      "Altura": 4200
    }
  },
  "Callao": {
    type: ["Departamento", "Casa", "Terreno"],
    zones: {
      "Central": 3474,
      "Periférica": 3200,
      "Zona Norte": 3400,
      "Zona Sur": 3600,
      "Zona Alta": 3700,
      "Zona Baja": 3300,
      "Cercano a Plaza": 4000,
      "Altura": 4100
    }
  },
  "San Martín de Porres": {
    type: ["Departamento", "Casa", "Terreno"],
    zones: {
      "Central": 3015,
      "Periférica": 2800,
      "Zona Norte": 3000,
      "Zona Sur": 3200,
      "Zona Alta": 3300,
      "Zona Baja": 2900,
      "Cercano a Plaza": 3600,
      "Altura": 3700
    }
  },
  "Cercado de Lima": {
    type: ["Departamento", "Casa", "Terreno"],
    zones: {
      "Central": 6049,
      "Periférica": 5800,
      "Zona Norte": 6000,
      "Zona Sur": 6200,
      "Zona Alta": 6300,
      "Zona Baja": 5900,
      "Cercano a Plaza": 6600,
      "Altura": 6700
    }
  },
  "Chorrillos": {
    type: ["Departamento", "Casa", "Terreno"],
    zones: {
      "Central": 5729,
      "Periférica": 5500,
      "Zona Norte": 5700,
      "Zona Sur": 5900,
      "Zona Alta": 6000,
      "Zona Baja": 5600,
      "Cercano a Plaza":5500
     }
   },
"Ancón": {
  type: ["Departamento","Casa","Terreno"],
  zones: {
    "Balneario/Prime": 3600,
    "Central": 3200,
    "Periférica": 2900,
    "Zona Norte": 3100,
    "Zona Sur": 3000,
    "Zona Este": 3050,
    "Zona Oeste": 3150
  }
},
"Carabayllo": {
  type: ["Departamento","Casa","Terreno"],
  zones: {
    "Consolidadas/Prime": 3200,
    "Central": 2800,
    "Periférica": 2600,
    "Zona Norte": 2700,
    "Zona Sur": 2750,
    "Zona Este": 2650,
    "Zona Oeste": 2850
  }
},
"Chaclacayo": {
  type: ["Departamento","Casa","Terreno"],
  zones: {
    "Club/Prime": 5600,
    "Central": 5200,
    "Periférica": 4800,
    "Zona Norte": 5000,
    "Zona Sur": 5100,
    "Zona Este": 5050,
    "Zona Oeste": 4950
  }
},
"Cieneguilla": {
  type: ["Departamento","Casa","Terreno"],
  zones: {
    "Residencial/Prime": 4600,
    "Central": 4300,
    "Periférica": 3900,
    "Zona Norte": 4100,
    "Zona Sur": 4200,
    "Zona Este": 4150,
    "Zona Oeste": 4050
  }
},
"Comas": {
  type: ["Departamento","Casa","Terreno"],
  zones: {
    "Av. Universitaria/Prime": 3400,
    "Central": 3200,
    "Periférica": 2900,
    "Zona Norte": 3000,
    "Zona Sur": 3050,
    "Zona Este": 2950,
    "Zona Oeste": 3150
  }
},
"El Agustino": {
  type: ["Departamento","Casa","Terreno"],
  zones: {
    "Mejoradas/Prime": 4700,
    "Central": 4500,
    "Periférica": 4200,
    "Zona Norte": 4300,
    "Zona Sur": 4400,
    "Zona Este": 4350,
    "Zona Oeste": 4450
  }
},
"Independencia": {
  type: ["Departamento","Casa","Terreno"],
  zones: {
    "MegaPlaza/Prime": 4300,
    "Central": 4000,
    "Periférica": 3700,
    "Zona Norte": 3800,
    "Zona Sur": 3900,
    "Zona Este": 3850,
    "Zona Oeste": 3950
  }
},
"Lurigancho-Chosica": {
  type: ["Departamento","Casa","Terreno"],
  zones: {
    "Club/Prime": 4100,
    "Central": 3800,
    "Periférica": 3500,
    "Zona Norte": 3600,
    "Zona Sur": 3700,
    "Zona Este": 3650,
    "Zona Oeste": 3550
  }
},
"Lurín": {
  type: ["Departamento","Casa","Terreno"],
  zones: {
    "Playas/Prime": 4600,
    "Central": 4200,
    "Periférica": 3800,
    "Zona Norte": 3900,
    "Zona Sur": 4000,
    "Zona Este": 3950,
    "Zona Oeste": 4050
  }
},
"Pachacámac": {
  type: ["Departamento","Casa","Terreno"],
  zones: {
    "Consolidadas/Prime": 3300,
    "Central": 3000,
    "Periférica": 2700,
    "Zona Norte": 2800,
    "Zona Sur": 2900,
    "Zona Este": 2850,
    "Zona Oeste": 2950
  }
},
"Pucusana": {
  type: ["Departamento","Casa","Terreno"],
  zones: {
    "Playa/Prime": 3800,
    "Central": 3600,
    "Periférica": 3200,
    "Zona Norte": 3300,
    "Zona Sur": 3400,
    "Zona Este": 3350,
    "Zona Oeste": 3450
  }
},
"Puente Piedra": {
  type: ["Departamento","Casa","Terreno"],
  zones: {
    "Consolidadas/Prime": 3200,
    "Central": 3000,
    "Periférica": 2700,
    "Zona Norte": 2800,
    "Zona Sur": 2900,
    "Zona Este": 2850,
    "Zona Oeste": 2950
  }
},
"Punta Hermosa": {
  type: ["Departamento","Casa","Terreno"],
  zones: {
    "Playa/Prime": 5600,
    "Central": 5200,
    "Periférica": 4700,
    "Zona Norte": 4900,
    "Zona Sur": 5000,
    "Zona Este": 4950,
    "Zona Oeste": 4850
  }
},
"Punta Negra": {
  type: ["Departamento","Casa","Terreno"],
  zones: {
    "Playa/Prime": 5200,
    "Central": 4800,
    "Periférica": 4400,
    "Zona Norte": 4500,
    "Zona Sur": 4600,
    "Zona Este": 4550,
    "Zona Oeste": 4650
  }
},
"Rímac": {
  type: ["Departamento","Casa","Terreno"],
  zones: {
    "Centro Histórico/Prime": 5200,
    "Central": 5000,
    "Periférica": 4600,
    "Zona Norte": 4700,
    "Zona Sur": 4800,
    "Zona Este": 4750,
    "Zona Oeste": 4850
  }
},
"San Bartolo": {
  type: ["Departamento","Casa","Terreno"],
  zones: {
    "Playa/Prime": 5000,
    "Central": 4500,
    "Periférica": 4100,
    "Zona Norte": 4300,
    "Zona Sur": 4400,
    "Zona Este": 4350,
    "Zona Oeste": 4250
  }
},
"San Juan de Lurigancho": {
  type: ["Departamento","Casa","Terreno"],
  zones: {
    "Zárate/Prime": 3800,
    "Central": 3600,
    "Periférica": 3300,
    "Zona Norte": 3400,
    "Zona Sur": 3500,
    "Zona Este": 3450,
    "Zona Oeste": 3550
  }
},
"San Luis": {
  type: ["Departamento","Casa","Terreno"],
  zones: {
    "Residencial/Prime": 6200,
    "Central": 5900,
    "Periférica": 5500,
    "Zona Norte": 5600,
    "Zona Sur": 5700,
    "Zona Este": 5650,
    "Zona Oeste": 5750
  }
},
"Santa Anita": {
  type: ["Departamento","Casa","Terreno"],
  zones: {
    "Parques/Prime": 5100,
    "Central": 4900,
    "Periférica": 4600,
    "Zona Norte": 4700,
    "Zona Sur": 4800,
    "Zona Este": 4750,
    "Zona Oeste": 4850
  }
},
"Santa María del Mar": {
  type: ["Departamento","Casa","Terreno"],
  zones: {
    "Playa/Prime": 7600,
    "Central": 7000,
    "Periférica": 6300,
    "Zona Norte": 6600,
    "Zona Sur": 6800,
    "Zona Este": 6700,
    "Zona Oeste": 6900
  }
},
"Santa Rosa": {
  type: ["Departamento","Casa","Terreno"],
  zones: {
    "Balneario/Prime": 3300,
    "Central": 3000,
    "Periférica": 2700,
    "Zona Norte": 2800,
    "Zona Sur": 2900,
    "Zona Este": 2850,
    "Zona Oeste": 2950
  }
},
"Santiago de Surco": {
  type: ["Departamento","Casa","Terreno"],
  zones: {
    "Monterrico/Prime": 7600,
    "Chacarilla": 7200,
    "Surco Viejo": 6400,
    "Central": 6800,
    "Periférica": 6100,
    "Límite SJM": 5800,
    "Las Gardenias/Valle Hermoso": 7000
  }
},
"Villa El Salvador": {
  type: ["Departamento","Casa","Terreno"],
  zones: {
    "Consolidadas/Prime": 3400,
    "Central": 3200,
    "Periférica": 2900,
    "Zona Norte": 3000,
    "Zona Sur": 3100,
    "Zona Este": 3050,
    "Zona Oeste": 3150
  }
},
"Villa María del Triunfo": {
  type: ["Departamento","Casa","Terreno"],
  zones: {
    "Consolidadas/Prime": 3200,
    "Central": 3000,
    "Periférica": 2700,
    "Zona Norte": 2800,
    "Zona Sur": 2900,
    "Zona Este": 2850,
    "Zona Oeste": 2950
  }
},
"Carmen de la Legua-Reynoso": {
  type: ["Departamento","Casa","Terreno"],
  zones: {
    "Residencial/Prime": 4200,
    "Central": 3900,
    "Periférica": 3600,
    "Zona Norte": 3700,
    "Zona Sur": 3800,
    "Zona Este": 3750,
    "Zona Oeste": 3850
  }
},
"La Punta": {
  type: ["Departamento","Casa","Terreno"],
  zones: {
    "Malecón/Prime": 7200,
    "Central": 6800,
    "Periférica": 6200,
    "Zona Norte": 6500,
    "Zona Sur": 6600,
    "Zona Este": 6400,
    "Zona Oeste": 6700
  }
},
"Ventanilla": {
  type: ["Departamento","Casa","Terreno"],
  zones: {
    "Consolidadas/Prime": 3500,
    "Central": 3300,
    "Periférica": 3000,
    "Zona Norte": 3100,
    "Zona Sur": 3200,
    "Zona Este": 3150,
    "Zona Oeste": 3250
  }
},
"Mi Perú": {
  type: ["Departamento","Casa","Terreno"],
  zones: {
    "Consolidadas/Prime": 3000,
    "Central": 2800,
    "Periférica": 2500,
    "Zona Norte": 2600,
    "Zona Sur": 2700,
    "Zona Este": 2650,
    "Zona Oeste": 2750
  }
}
