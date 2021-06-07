            var ArrayTipo = new Array ("");
            var ArrayTipo1 = new Array ("186,7");
            var ArrayTipo2 = new Array ("1328");
            var ArrayTipo3 = new Array ("126");
            var ArrayTipo4 = new Array ("116");
            var ArrayTipo5 = new Array ("110");
            var ArrayTipo6 = new Array ("120");
            var ArrayTipo7 = new Array ("127");
            var ArrayTipo8 = new Array ("113");
            var ArrayTipo9 = new Array ("112");
            var ArrayTipo10 = new Array ("114");
            var ArrayTipo11 = new Array ("111,3");
            var ArrayTipo12 = new Array ("108");
            var ArrayTipo13 = new Array ("114");
            var ArrayTipo14 = new Array ("99.5");
            var ArrayTipo15 = new Array ("101.9");
            var ArrayTipo16 = new Array ("95");
            var ArrayTipo17 = new Array ("99.4");
            var ArrayTipo18 = new Array ("99.7");
            var ArrayTipo19 = new Array ("98");
            var ArrayTipo20 = new Array ("94.8");

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
                else if (id_tipo == 14)
                    ArrayTipo = ArrayTipo14;
                else if (id_tipo == 15)
                    ArrayTipo = ArrayTipo15;
                else if (id_tipo == 16)
                    ArrayTipo = ArrayTipo16;
                else if (id_tipo == 17)
                    ArrayTipo = ArrayTipo17;
                else if (id_tipo == 18)
                    ArrayTipo = ArrayTipo18;
                else if (id_tipo == 19)
                    ArrayTipo = ArrayTipo19;
                else if (id_tipo == 20)
                    ArrayTipo = ArrayTipo20;
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