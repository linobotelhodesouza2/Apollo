            var ArrayTipo = new Array ("");
            var ArrayTipo1 = new Array ("78.4");
            var ArrayTipo2 = new Array ("75");
            var ArrayTipo3 = new Array ("68");

            function PopulaCombo(id_tipo)
            {
                if (id_tipo == 1)
                    ArrayTipo = ArrayTipo1;
                else if (id_tipo == 2)
                    ArrayTipo = ArrayTipo2;
                else if (id_tipo == 3)
                    ArrayTipo = ArrayTipo3;
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