 let pedidos = [];
        let tipoActual = "domicilio";

        const personalizables = {
            "Arepa jamón": {
                quitar: ["Jamon", "Papa fosforito", "Queso"],
                salsas: ["Tomate", "Piña", "Tartara", "Rosada"],
                salsa: true
            },

            "Arepa carne hilachada": {
                quitar: ["Carne hilachada", "Queso", "Papa fosforito"],
                salsas: ["Tomate", "Piña", "Tartara", "Rosada"],
                salsa: true
            },

            "Arepa suiza": {
                quitar: ["Chorizo", "Queso", "Papa fosforito", "Butifarra", "Salchicha", "Tocineta", "Jamon", "Cebolla", "Pimenton", "Maiz", "Queso gratinado"],
                salsas: ["Tomate", "Piña", "Tartara", "Rosada"],
                salsa: true
            },

            "Choripatacón sencillo": {
                quitar: ["Patacon","Lechuga","Chorizo","Queso"],
                salsas: ["Tomate"],
                salsa: true
            },

            "Choripatacón doble": {
                quitar: ["Patacon","Lechuga","Chorizo","Queso"],
                salsas: ["Tomate"],
                salsa: true
            },

            "Patacón con todo personal": {
                quitar: [],
                salsas: [],
                salsa: true
            },

            "Picada pequeña": {
                quitar: ["Papa francesa", "Patacon", "Butifarra", "Chorizo", "Tocineta", "Salchicha", "Cerdo", "Pechuga", "Queso", "Papa fosforito", "Lechuga", "Cebolla", "Pimenton", "Maiz", "Queso gratinado"],
                salsas: ["Tomate", "Piña", "Tartara", "Rosada"],
                salsa: true
            },

            "Picada mediana": {
                quitar: ["Papa francesa", "Patacon", "Butifarra", "Chorizo", "Tocineta", "Salchicha", "Cerdo", "Pechuga", "Queso", "Papa fosforito", "Lechuga", "Cebolla", "Pimenton", "Maiz", "Queso gratinado"],
                salsas: ["Tomate", "Piña", "Tartara", "Rosada"],
                salsa: true
            },

            "Picada grande": {
                quitar: ["Papa francesa", "Patacon", "Butifarra", "Chorizo", "Tocineta", "Salchicha", "Cerdo", "Pechuga", "Queso", "Papa fosforito", "Lechuga", "Cebolla", "Pimenton", "Maiz", "Queso gratinado"],
                salsas: ["Tomate", "Piña", "Tartara", "Rosada"],
                salsa: true
            },

            "Suizo pequeño": {
                quitar: ["Papa francesa", "Butifarra", "Chorizo", "Salchicha", "Tocineta", "Queso", "Papa fosforito", "Lechuga", "Cebolla", "Pimenton", "Maiz", "Queso gratinado"],
                salsas: ["Tomate", "Piña", "Tartara", "Rosada"],
                salsa: true
            },

            "Suizo grande": {
                quitar: ["Papa francesa", "Butifarra", "Chorizo", "Salchicha", "Tocineta", "Queso", "Papa fosforito", "Lechuga", "Cebolla", "Pimenton", "Maiz", "Queso gratinado"],
                salsas: ["Tomate", "Piña", "Tartara", "Rosada"],
                salsa: true
            },

            "Mega suizo": {
                quitar: ["Papa francesa", "Butifarra", "Chorizo", "Salchicha", "Tocineta", "Queso", "Papa fosforito", "Lechuga", "Cebolla", "Pimenton", "Maiz", "Queso gratinado"],
                salsas: ["Tomate", "Piña", "Tartara", "Rosada"],
                salsa: true
            },

            "Perro pequeño": {
                quitar: ["Pan", "Salchicha perro", "Papa fosforito", "Queso", "Queso gratinado"],
                salsas: ["Tomate", "Piña", "Tartara", "Rosada"],
                salsa: true
            },

            "Perro mediano": {
                quitar: ["Pan", "Salchicha perro", "Lechuga", "Cebolla", "Papa fosforito", "Queso", "Queso gratinado"],
                salsas: ["Tomate", "Piña", "Tartara", "Rosada"],
                salsa: true
            },

            "Perro especial": {
                quitar: ["Pan", "Salchicha perro", "Butifarra", "Tocineta", "Salchicha", "Chorizo", "Lechuga", "Papa fosforito", "Queso", "Maiz", "Queso gratinado", "Pimenton", "Cebolla"],
                salsas: ["Tomate", "Piña", "Tartara", "Rosada"],
                salsa: true
            },

            "Salchipapa sencilla": {
                quitar: ["Papa francesa", "Salchicha", "Lechuga", "Queso", "Papa fosforito", "Queso gratinado"],
                salsas: ["Tomate", "Piña", "Tartara", "Rosada"],
                salsa: true
            },

            "Salchipapa especial": {
                quitar: ["Papa francesa", "Salchicha", "Butifarra", "Chorizo", "Queso", "Papa fosforito", "Lechuga", "Queso gratinado"],
                salsas: ["Tomate", "Piña", "Tartara", "Rosada"],
                salsa: true
            },

            "Asado de res con patacon": {
                quitar: ["Patacon","Ensalada","Porcion de carne","Queso gratinado"],
                salsas: ["Vinagreta"],
                
            },

            "Asado de res con papa francesa": {
                quitar: ["Papa francesa","Ensalada","Porcion de carne","Queso gratinado"],
                salsas: ["Vinagreta"],
                
            },
        };


        const menuData = {
            arepas: [

                {
                    name: "Arepa jamón", price: 8000, img: "https://i.postimg.cc/j5PZ7N9K/arepajamon.jpg",
                    ingredientes: [ "Jamon", "Papa fosforito", "Queso", "SALSAS", "Tomate", "Piña", "Tartara", "Rosada"]
                },
                {
                    name: "Arepa carne hilachada", price: 9000, img: "https://i.postimg.cc/8czYT8Bn/arepacarne.jpg",
                    ingredientes: ["Arepa", "Carne hilachada", "Queso", "Papa fosforito", "SALSAS", "Tomate", "Piña", "Tartara", "Rosada"]
                },

                {
                    name: "Arepa suiza", price: 10000, img: "https://i.postimg.cc/DyBntbzC/arepasuiza.png",
                    ingredientes: ["Arepa", "Chorizo", "Queso", "Papa fosforito", "Butifarra", "Salchicha", "Tocineta", "Jamon", "Cebolla", "Pimenton", "Maiz", "Queso gratinado", "SALSAS", "Tomate", "Piña", "Tartara", "Rosada"]
                }
            ],
            choripatacon: [
                {
                    name: "Choripatacón sencillo", price: 6000, img: "https://i.postimg.cc/P5Xz50h9/choripata6.png",
                    ingredientes: ["Patacon","Lechuga","Chorizo","Queso","SALSAS","Tomate"]
                },
                { name: "Choripatacón doble", price: 12000, img: "https://i.postimg.cc/kXWcLqw9/choridoble.jpg",
                    ingredientes: ["Patacon","Lechuga","Chorizo","Queso","SALSAS","Tomate"]
                 }
            ],
            patacones: [{ name: "Patacón con todo personal", price: 13000, img: "https://i.postimg.cc/j2H5Txtn/pataconcontodo.jpg" }],
            chorizos: [{
                name: "Chorizo de cerdo", price: 2000, img: "https://i.postimg.cc/VLMc0PNH/chorizocerdo.png",
                ingredientes: ["Chorizo de cerdo", "Bollo limpio"]
            }],
            adicionales: [
                { name: "Papa francesa", price: 3000, img: "https://i.postimg.cc/x1KVVbC5/adipapa.jpg" },
                { name: "Patacón adicional", price: 3000, img: "https://i.postimg.cc/MHCqksrp/adipatacon.png" }
            ],
            bebidas: [
                { name: "Jugo de corozo", price: 1000, img: "https://i.postimg.cc/htPjFRw7/corozo.jpg" },
                { name: "Gaseosa personal 250 ML", price: 1500, img: "https://i.postimg.cc/HsdGcmVS/postobon-250.jpg" },
                { name: "Gaseosa personal 400 ML", price: 2000, img: "https://i.postimg.cc/RF411gKN/surtida400ml.webp" }
            ],
            picadas: [
                {
                    name: "Picada pequeña", price: 20000, img: "https://i.postimg.cc/wvQDzkZ6/picada20.jpg",
                    ingredientes: ["Papa francesa", "Patacon", "Butifarra", "Chorizo", "Tocineta", "Salchicha", "Cerdo", "Pechuga", "Queso", "Papa fosforito", "Lechuga", "Cebolla", "Pimenton", "Maiz", "Queso gratinado", "SALSAS", "Tomate", "Piña", "Tartara", "Rosada"]
                },
                {
                    name: "Picada mediana", price: 30000, img: "https://i.postimg.cc/HLNZq8Qr/picada30.png",
                    ingredientes: ["Papa francesa", "Patacon", "Butifarra", "Chorizo", "Tocineta", "Salchicha", "Cerdo", "Pechuga", "Queso", "Papa fosforito", "Lechuga", "Cebolla", "Pimenton", "Maiz", "Queso gratinado", "SALSAS", "Tomate", "Piña", "Tartara", "Rosada"]
                },
                {
                    name: "Picada grande", price: 40000, img: "https://i.postimg.cc/3JSk8g7S/picadagrande.jpg",
                    ingredientes: ["Papa francesa", "Patacon", "Butifarra", "Chorizo", "Tocineta", "Salchicha", "Cerdo", "Pechuga", "Queso", "Papa fosforito", "Lechuga", "Cebolla", "Pimenton", "Maiz", "Queso gratinado", "SALSAS", "Tomate", "Piña", "Tartara", "Rosada"]
                }
            ],
            suizos: [
                {
                    name: "Suizo pequeño", price: 15000, img: "https://i.postimg.cc/LsrdzbQ3/suizo15.png",
                    ingredientes: ["Papa francesa", "Butifarra", "Chorizo", "Salchicha", "Tocineta", "Queso", "Papa fosforito", "Lechuga", "Cebolla", "Pimenton", "Maiz", "Queso gratinado", "SALSAS", "Tomate", "Piña", "Tartara", "Rosada"]
                },
                {
                    name: "Suizo grande", price: 20000, img: "https://i.postimg.cc/bJnPKD21/suizo20.jpg",
                    ingredientes: ["Papa francesa", "Butifarra", "Chorizo", "Salchicha", "Tocineta", "Queso", "Papa fosforito", "Lechuga", "Cebolla", "Pimenton", "Maiz", "Queso gratinado", "SALSAS", "Tomate", "Piña", "Tartara", "Rosada"]
                },
                {
                    name: "Mega suizo", price: 25000, img: "https://i.postimg.cc/9FmHcFR2/megasuizo.jpg",
                    ingredientes: ["Papa francesa", "Butifarra", "Chorizo", "Salchicha", "Tocineta", "Queso", "Papa fosforito", "Lechuga", "Cebolla", "Pimenton", "Maiz", "Queso gratinado", "SALSAS", "Tomate", "Piña", "Tartara", "Rosada"]
                }
            ],
            perros: [
                {
                    name: "Perro pequeño", price: 4000, img: "https://i.postimg.cc/tgfMP94n/perro4.jpg",
                    ingredientes: ["Pan", "Salchicha perro", "Papa fosforito", "Queso", "Queso gratinado", "SALSAS", "Tomate", "Piña", "Tartara", "Rosada"]
                },
                {
                    name: "Perro mediano", price: 8000, img: "https://i.postimg.cc/90493BY1/perromedi2.png",
                    ingredientes: ["Pan", "Salchicha perro", "Lechuga", "Cebolla", "Papa fosforito", "Queso", "Queso gratinado", "SALSAS", "Tomate", "Piña", "Tartara", "Rosada"]
                },
                {
                    name: "Perro especial", price: 12000, img: "https://i.postimg.cc/TPLLgSMJ/perro12e.png",
                    ingredientes: ["Pan", "Salchicha perro", "Butifarra", "Tocineta", "Salchicha", "Chorizo", "Lechuga", "Papa fosforito", "Queso", "Maiz", "Queso gratinado", "Pimenton", "Cebolla", "SALSAS", "Tomate", "Piña", "Tartara", "Rosada"]
                }
            ],
            salchipapas: [
                {
                    name: "Salchipapa sencilla", price: 10000, img: "https://i.postimg.cc/CKPV2yLg/salchi10.jpg",
                    ingredientes: ["Papa francesa", "Salchicha", "Lechuga", "Queso", "Papa fosforito", "Queso gratinado", "SALSAS", "Tomate", "Piña", "Tartara", "Rosada"]
                },
                {
                    name: "Salchipapa especial", price: 15000, img: "https://i.postimg.cc/66nQBN6C/salchipapa15.jpg.webp",
                    ingredientes: ["Papa francesa", "Salchicha", "Butifarra", "Chorizo", "Queso", "Papa fosforito", "Lechuga", "Queso gratinado", "SALSAS", "Tomate", "Piña", "Tartara", "Rosada"]
                }
            ],
            asados: [{ name: "Asado de res con patacon", price: 13000, img: "https://i.postimg.cc/bwJsjvgz/asadores.png",
                       ingredientes: ["Patacon","Ensalada","Porcion de carne","Queso gratinado","SALSAS","Vinagreta"]
             },
                     { name: "Asado de res con papa francesa", price: 13000, img: "https://i.postimg.cc/k4mmQKWG/asadoconpapas.jpg",
                        ingredientes: ["Papa francesa","Ensalada","Porcion de carne","Queso gratinado","SALSAS","Vinagreta"]
                      }

            ]
        };

        function cardHTML(p) {
            const n = p.name.replace(/'/g, "&#39;");
            return `<div class="card">
        <div class="card-inner">
            <img src="${p.img}" alt="${n}" onerror="this.src='https://via.placeholder.com/600x400/8B4513/FFF?text=Sin+imagen'">
            <div class="card-info">
                <h4>${p.name}</h4>
                <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:14px;">
    
    <div class="precio">
        $${p.price.toLocaleString('es-CO')}
    </div>
    
    ${p.ingredientes ? `
<button
    class="btn-agregar"
    style="padding:8px 12px;font-size:13px;flex:none;"
    onclick="verContenido(this)">
    Contenido
</button>
` : ""}




</div>

<div id="contenido-${n}" class="contenido-producto"

    style="
           display:none;
    position:absolute;
    top:140px;
    left:10px;
    right:10px;
    background:white;
    border-radius:15px;
    padding:15px;
    box-shadow:0 10px 25px rgba(0,0,0,.2);
    z-index:50;
    max-height:250px;
    overflow-y:auto;
    ">
    <button class="cerrar-contenido" onclick="this.parentElement.style.display='none'">✕</button>

    <div style="
        font-weight:800;
        margin-bottom:10px;
        color:#C0392B;
        font-size:15px;
        text-align:center;
    ">
        🍔 Contenido del producto
    </div>

    ${p.ingredientes
                    ? p.ingredientes.map(item =>
                        `<div style="margin-bottom:6px;">• ${item}</div>`
                    ).join("")
                    : "Sin contenido registrado"
                }
</div>



                <div class="cantidad-agregar">
                    <button class="btn-cantidad" onclick="cambiar(this,-1)">−</button>
                    <input type="number" value="1" min="1">
                    <button class="btn-cantidad" onclick="cambiar(this,1)">+</button>
                    <button class="btn-agregar" onclick="add('${n}',${p.price},this)">Agregar</button>
                </div>
            </div>
        </div>
    </div>`;
        }

        function mostrar(cat) {
            let lista = cat === "todos" ? Object.values(menuData).flat().sort(() => Math.random() - .5) : (menuData[cat] || []);
            document.getElementById("contenido").innerHTML = lista.map(cardHTML).join("");
        }

        function buscar(val) {
            let todos = Object.values(menuData).flat();
            let lista = val ? todos.filter(p => p.name.toLowerCase().includes(val.toLowerCase())) : todos;
            document.getElementById("contenido").innerHTML = lista.map(cardHTML).join("");
        }

        function cambiar(btn, c) {
            let inp = btn.parentElement.querySelector("input");
            let v = parseInt(inp.value) + c;
            inp.value = v < 1 ? 1 : v;
        }

        function verContenido(btn) {
            let card =
                btn.closest(".card-info");

            let contenido =
                card.querySelector(".contenido-producto");

            if (contenido.style.display === "none") {
                contenido.style.display = "block";
            } else {
                contenido.style.display = "none";
            }
        }



        function add(n, p, btn) {
            let cant = parseInt(btn.parentElement.querySelector("input").value);

            for (let i = 0; i < cant; i++) {
                pedidos.push({
                    nombre: n,
                    p: p,
                    cambios: {
                        quitar: [],
                        quitarSalsas: [],
                        salsa: personalizables[n]?.salsa ? "normal" : null
                    }

                });
            }

            update();

            let m = document.getElementById("mensaje");

            m.style.display = "block";
            setTimeout(() => m.style.display = "none", 1800),


                calcularCambio();
        }



        function update() {
            let total = 0;

            if (!pedidos.length) {
                document.getElementById("items").innerHTML =
                    '<div class="carrito-vacio"><span class="emoji">🛒</span><p>Tu carrito está vacío</p></div>';
            } else {
                document.getElementById("items").innerHTML =
                    pedidos.map((it, index) => {
                        total += it.p;

                        return `
                <div class="carrito-item">
                    <div class="item-nombre">${it.nombre}</div>

                    <div style="display:flex;align-items:center;gap:6px;margin-top:8px;">

                        <button class="btn-ctrl"
                            onclick="restar(${index})">−</button>

                        <span class="item-cant">1</span>

                        <button class="btn-ctrl"
                            onclick="sumar(${index})">+</button>

                        <button class="btn-ctrl"
                            onclick="abrirInfo(${index})">ℹ</button>

                        <span style="flex:1"></span>

                        <span class="item-precio">
                            $${it.p.toLocaleString('es-CO')}
                        </span>

                        <button class="btn-eliminar"
                            onclick="eliminar(${index})">🗑</button>

                    </div>
                    <div style="
    margin-top:8px;
    font-size:12px;
    color:#666;
    font-weight:600;
">
    👉 Puedes personalizar este producto con el botón ℹ
</div>

                </div>
                
                `;
                    }).join("");
            }

            document.getElementById("total").innerText =
                total.toLocaleString('es-CO');

            document.getElementById("cart-count").textContent =
                pedidos.length;
        }

        function eliminar(index) {
            pedidos.splice(index, 1);
            update();
            calcularCambio();
        }

        function sumar(index) {
            pedidos.push({
                ...pedidos[index]
            });

            update();
            calcularCambio();
        }

        function restar(index) {
            pedidos.splice(index, 1);
            update();
            calcularCambio();
        }



        function selTipo(t) {
            tipoActual = t;

            document.getElementById("btn-domicilio").className =
                "tipo-btn" + (t === "domicilio" ? " activo" : "");

            document.getElementById("btn-recoger").className =
                "tipo-btn" + (t === "recoger" ? " activo" : "");

            if (t === "domicilio") {
                document.getElementById("direccionBox").style.display = "block";
                document.getElementById("ubicacionBox").style.display = "none";
            } else {
                document.getElementById("direccionBox").style.display = "none";
                document.getElementById("ubicacionBox").style.display = "block";
            }
        }

        function abrirMenu() { document.getElementById("menu").style.transform = "translateX(0)"; document.getElementById("overlay").style.display = "block"; }
        function cerrarMenu() { document.getElementById("menu").style.transform = "translateX(-100%)"; document.getElementById("overlay").style.display = "none"; }
        function abrirCarrito() {
            document.getElementById("carrito").style.transform = "translateX(0)";
            document.getElementById("overlay").style.display = "block";
            document.body.classList.add("no-scroll");
        }

        function cerrarCarrito() {
            document.getElementById("carrito").style.transform = "translateX(100%)";
            document.getElementById("overlay").style.display = "none";
            document.body.classList.remove("no-scroll");
        }

        function cerrarTodo() { cerrarMenu(); cerrarCarrito(); }

        function abrirInfo(index) {
            cerrarCarrito();

            let producto = pedidos[index];
            let config = personalizables[producto.nombre];

            if (!config) {
                return;
            }

            let html = `
        <h3>${producto.nombre}</h3>
        <br>
        <p><strong>Quitar ingredientes:</strong></p>
        <br>
    `;

            config.quitar.forEach(item => {
                let marcado = producto.cambios.quitar.includes(item) ? "checked" : "";

                html += `
            <label style="display:block;margin-bottom:10px;">
                <input 
                    type="checkbox"
                    ${marcado}
                    onchange="toggleQuitar(${index}, '${item}')"
                >
                Quitar ${item}
            </label>
        `;
            });

            if (config.salsas) {
                html += `
        <br>
        <p><strong>Quitar salsas:</strong></p>
        <br>
    `;

                config.salsas.forEach(salsa => {
                    let marcado = producto.cambios.quitarSalsas.includes(salsa) ? "checked" : "";

                    html += `
            <label style="display:block;margin-bottom:10px;">
                <input
                    type="checkbox"
                    ${marcado}
                    onchange="toggleSalsa(${index}, '${salsa}')"
                >
                Quitar ${salsa}
            </label>
        `;
                });
            }


            if (config.salsa) {
                html += `
            <br>
            <p><strong>Cantidad de salsa:</strong></p>
            <br>

            <select
                onchange="cambiarSalsa(${index}, this.value)"
                style="width:100%;padding:10px;border-radius:10px;"
            >
                <option value="poca"
                    ${producto.cambios.salsa === "poca" ? "selected" : ""}>
                    Poca
                </option>

                <option value="normal"
                    ${producto.cambios.salsa === "normal" ? "selected" : ""}>
                    Normal
                </option>

                <option value="mucha"
                    ${producto.cambios.salsa === "mucha" ? "selected" : ""}>
                    Mucha
                </option>
            </select>
        `;
            }

            html += `
    <div style="margin-top:20px;">
        <button
            onclick="guardarCambios()"
            style="
                width:100%;
                padding:10px;
                border:none;
                border-radius:10px;
                background:linear-gradient(135deg,#27AE60,#1E8449);
                color:white;
                font-size:14px;
                font-weight:800;
                cursor:pointer;
            "
        >
            Guardar cambios
        </button>
    </div>
`;

            document.getElementById("contenidoInfo").innerHTML = html;

            document.getElementById("infoProducto").style.transform =
                "translateX(0)";

            document.getElementById("overlay").style.display =
                "block";
        }
        function cerrarInfo() {
            document.getElementById("infoProducto").style.transform =
                "translateX(100%)";

            abrirCarrito();
        }

        function guardarCambios() {
            cerrarInfo();

            let m = document.getElementById("mensaje");
            m.innerText = "✅ Producto actualizado";
            m.style.display = "block";

            setTimeout(() => {
                m.style.display = "none";
                m.innerText = "✅ ¡Agregado al carrito!";
            }, 1800);
        }

        function toggleQuitar(index, item) {
            let lista = pedidos[index].cambios.quitar;

            if (lista.includes(item)) {
                pedidos[index].cambios.quitar =
                    lista.filter(x => x !== item);
            } else {
                pedidos[index].cambios.quitar.push(item);
            }
        }

        function toggleSalsa(index, salsa) {
            let lista = pedidos[index].cambios.quitarSalsas;

            if (lista.includes(salsa)) {
                pedidos[index].cambios.quitarSalsas =
                    lista.filter(x => x !== salsa);
            } else {
                pedidos[index].cambios.quitarSalsas.push(salsa);
            }
        }

        function cambiarSalsa(index, tipo) {
            pedidos[index].cambios.salsa = tipo;
        }


        function enviar() {
            let nombre = document.getElementById("nombre").value.trim();
            let dir = document.getElementById("direccion").value.trim();
            let pagaCon = document.getElementById("pagaCon").value.trim();

            if (!nombre) {
                alert("Por favor escribe tu nombre");
                return;
            }

            if (tipoActual === "domicilio" && !dir) {
                alert("Por favor escribe tu dirección");
                return;
            }

            if (!pedidos.length) {
                alert("Agrega productos primero");
                return;
            }

            let total = 0;

            pedidos.forEach(it => {
                total += it.p;
            });

            let msg = "👋 Hola, quiero realizar el siguiente pedido:%0A%0A";

            pedidos.forEach((it, index) => {
                msg += "🍔 Producto " + (index + 1) + ": " + it.nombre + "%0A";

                if (it.cambios.quitar.length > 0) {
                    msg += "❌ Quitar: " +
                        it.cambios.quitar.join(", ") + "%0A";
                }

                if (it.cambios.quitarSalsas.length > 0) {
                    msg += "🥫 Quitar salsas: " +
                        it.cambios.quitarSalsas.join(", ") + "%0A";
                }


                if (it.cambios.salsa) {
                    msg += "🥫 Salsa: " + it.cambios.salsa + "%0A";
                }


                msg += "💵 Precio: $" +
                    it.p.toLocaleString('es-CO') + "%0A";

                msg += "━━━━━━━━━━━━━━%0A";
            });

            msg += "💰 Total: $" +
                total.toLocaleString('es-CO') + "%0A";

            if (tipoActual === "domicilio") {
                msg += "🛵 Tipo: Domicilio%0A";
                msg += "📍 Dirección: " + dir + "%0A";
            } else {
                msg += "🏪 Tipo: Recoger en negocio%0A";
            }

            if (pagaCon) {
                let cambio = parseInt(pagaCon) - total;

                msg += "💵 Pago con: $" +
                    parseInt(pagaCon).toLocaleString('es-CO') + "%0A";

                msg += "💸 Cambio: $" +
                    cambio.toLocaleString('es-CO') + "%0A";
            }

            msg += "🙋 Nombre: " + nombre + "%0A";
            msg += "%0AGracias 😊";

            window.open(
                "https://wa.me/573108580801?text=" + msg
            );
        }




        mostrar("todos");

        function toggleContenido(id) {
            let box = document.getElementById("contenido-" + id);



            if (box.style.display === "none" || box.style.display === "") {
                box.style.display = "block";
            } else {
                box.style.display = "none";
            }
        }

        function limpiarNumero(texto) {
            return parseFloat(
                texto.replace(/\./g, '')   // quita puntos de miles
                    .replace(/\$/g, '')   // quita $
                    .trim()
            ) || 0;
        }

        const formatearPesos = (valor) => {
            return valor.toLocaleString('es-CO', {
                style: 'currency',
                currency: 'COP',
                minimumFractionDigits: 0
            });
        };

        const inputPagaCon = document.getElementById('pagaCon');
        const totalElement = document.getElementById('total');
        const valorElement = document.getElementById('valor-cambio');
        const valorTextElement = document.getElementById('cambio-text1');
        const valorTextDosElement = document.getElementById('cambio-text2');

        function calcularCambio() {
            const total = limpiarNumero(totalElement.textContent) || 0;
            const pago = parseFloat(inputPagaCon.value || 0);

            if (!pago) {
                valorTextElement.style.display = 'block';
                valorTextDosElement.style.display = 'none';
            } else {
                valorTextElement.style.display = 'none';
                valorTextDosElement.style.display = 'block';
            }

            const cambio = pago - total;

            valorElement.textContent = formatearPesos(cambio >= 0 ? cambio : 0);
        }

        // Cuando el usuario escribe
        inputPagaCon.addEventListener('input', calcularCambio);
