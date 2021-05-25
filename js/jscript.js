            var ArrayTipo = new Array ("");
            var ArrayTipo1 = new Array ("92");
            var ArrayTipo2 = new Array ("92");
            var ArrayTipo3 = new Array ("85");
            var ArrayTipo4 = new Array ("90");
            var ArrayTipo5 = new Array ("96.5");
            var ArrayTipo6 = new Array ("86");
            var ArrayTipo7 = new Array ("85.7");
            var ArrayTipo8 = new Array ("79");
            var ArrayTipo9 = new Array ("84");
            var ArrayTipo10 = new Array ("66.5");
            var ArrayTipo11 = new Array ("76");
            var ArrayTipo12 = new Array ("78.8");
            var ArrayTipo13 = new Array ("75");

            function PopulaCombo(id_tipo)
            {
                if (id_tipo == 1)
                    ArrayTipo = ArrayTipo1;
                else if (id_tipo == 2)
                    ArrayTipo = ArrayTipo2;
                else if (id_tipo == 3)
                    ArrayTipo = ArrayTipo3;
                else if (id_tipo == 4)
                    ArrayTipo = ArrayTipo4;
                else if (id_tipo == 5)
                    ArrayTipo = ArrayTipo5;
                else if (id_tipo == 6)
                    ArrayTipo = ArrayTipo6;
                else if (id_tipo == 7)
                    ArrayTipo = ArrayTipo7;
                else if (id_tipo == 8)
                    ArrayTipo = ArrayTipo8;
                else if (id_tipo == 9)
                    ArrayTipo = ArrayTipo9;
                else if (id_tipo == 10)
                    ArrayTipo = ArrayTipo10;
                else if (id_tipo == 11)
                    ArrayTipo = ArrayTipo11;
                else if (id_tipo == 12)
                    ArrayTipo = ArrayTipo12;
                else if (id_tipo == 13)
                    ArrayTipo = ArrayTipo13;
                else
                {
                    Remove();
                    return
                }

            document.form.opcao.disabled = false;
            document.form.opcao.options.length = 0;

                for (i=0; i <= ArrayTipo.length-1; i++)
                {
                window.document.form.opcao.options[i] = new Option(ArrayTipo[i],i);
                }
            }

            function Remove()
            {
            var opcoes = document.form.opcao.options;

                for (i=0; i <= opcoes.options.length+2; i++)
                {
                    opcoes.options.remove(0);
                }
            opcoes.disabled = true;
            }