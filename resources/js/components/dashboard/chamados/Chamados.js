import {gridDataByForm, getDataByForm, sendData} from '../../requests';
import {EmpresaProdutos, Empresas, AssuntosByProduto, getCookie} from '../../../hooks';
import {alert} from '../../utils';

const Chamados = () => {

  const loadNovaOS = async () => {
    let data = await Empresas();

    createSelect(
      "",
      "inputEmpresaAdd",
      data,
      "NM_RAZAO_SOCIAL",
      "ID_EMPRESA",
      "");
  };

  const getProdutoAdd = async (event) => {
    let data
    let ID_EMPRESA = event.target.value;

    data = await EmpresaProdutos(ID_EMPRESA);

    createSelect(
      "",
      "inputProdutoAdd",
      data,
      "produto.NM_PRODUTO",
      "produto.ID_PRODUTO",
      "");

  }

  const getAssuntoAdd = async (event) => {
    let data;
    let ID_PRODUTO = event.target.value;

    data = await AssuntosByProduto(ID_PRODUTO);

    createSelect(
      "",
      "inputAssuntoAdd",
      data,
      "DS_ASSUNTO",
      "ID_ASSUNTO",
      "");
  }

  const submitAdd = (event) => {
    if (event !== undefined)
      event.preventDefault();
    
    document.getElementById("list-clear").innerHTML = "";

    sendData(
      document.getElementById('formOsChamadoAdd'),
      function(data){
        if (data.message !== 'Unauthenticated.'){
          
          console.log(data);
          alert('alertAdd', 'Criado uma nova ordem de serviço.', 'success');
          
          submit();

          var myModal = bootstrap.Modal.getInstance(document.getElementById('modalNovaOS'));
          myModal.toggle();

          doLimparCampoNovaOS();
        }
      },
      function(data){
        alert('alertAdd', 'Falha ao criar nova ordem de serviço.', 'warning');
      },
    );
    
  };

  const doLimparCampoNovaOS = () => {
    document.getElementById('inputResumoAdd').value = '';
    document.getElementById('inputDescricaoAdd').value = '';

    document.getElementById('inputEmpresaAdd').selectedIndex = 0;
    document.getElementById('inputProdutoAdd').options.length = 1;
    document.getElementById('inputAssuntoAdd').options.length = 1;
  }

  const createSelect = (selectText, idInput, data, fieldText, fieldValue, sessionId) => {
    let dropdown = document.getElementById(idInput);
    dropdown.options.length = 0;

    let option = document.createElement('option');
    option.text = selectText;
    dropdown.add(option);

    for (let i = 0; i < data.length; i++) {
      option = document.createElement('option');
      if (fieldText.includes('.')){
        let campos;
        campos = fieldText.split('.');
        option.text = data[i][campos[0]][campos[1]];
        campos = fieldValue.split('.');
        option.value  = data[i][campos[0]][campos[1]];
      } else {
        option.text = data[i][fieldText];
        option.value  = data[i][fieldValue];
      }

      dropdown.add(option);
    }

    if (sessionStorage.getItem(sessionId))
      dropdown.value = sessionStorage.getItem(sessionId);
    else
      dropdown.selectedIndex = 0;
  }

  const startSelects = async () => {
    let data

    if (sessionStorage.getItem("selectID_CHAMADO")){
      document.getElementById('inputCodigo').value = sessionStorage.getItem("selectID_CHAMADO");
    }

    if (sessionStorage.getItem("selectDT_ABERTURA")){
      document.getElementById('inputDtAbertura').value = sessionStorage.getItem("selectDT_ABERTURA");
    }

    if (sessionStorage.getItem("selectDT_ENCERRAMENTO")){
      document.getElementById('inputDtFinal').value = sessionStorage.getItem("selectDT_ENCERRAMENTO");
    }

    if (sessionStorage.getItem("selectDM_STATUS")){
      document.getElementById('inputStatus').value = sessionStorage.getItem("selectDM_STATUS");
    } else {
      document.getElementById('inputStatus').selectedIndex = 1;
    }

    if (sessionStorage.getItem("selectID_EMPRESA")){
      data = await Empresas();

      createSelect(
        "Selecione uma Empresa",
        "inputEmpresa",
        data,
        "NM_RAZAO_SOCIAL",
        "ID_EMPRESA",
        "selectID_EMPRESA");

      let ID_EMPRESA = sessionStorage.getItem("selectID_EMPRESA");
      data = await EmpresaProdutos(ID_EMPRESA);

      createSelect(
        "Selecione um Produto",
        "inputProduto",
        data,
        "produto.NM_PRODUTO",
        "produto.ID_PRODUTO",
        "selectID_PRODUTO");

      if (sessionStorage.getItem("selectID_PRODUTO")){


        let ID_PRODUTO = sessionStorage.getItem("selectID_PRODUTO");
        data = await AssuntosByProduto(ID_PRODUTO);

        createSelect(
          "Selecione um Assunto",
          "inputAssunto",
          data,
          "DS_ASSUNTO",
          "ID_ASSUNTO",
          "selectID_ASSUNTO");
      }

    } else {
      getSeletEmpresa();
    }

    submit();
  }

  const getSeletEmpresa = async () => {
    let data;

    data = await Empresas();

    createSelect(
      "Selecione uma Empresa",
      "inputEmpresa",
      data,
      "NM_RAZAO_SOCIAL",
      "ID_EMPRESA",
      "selectID_EMPRESA");

  }

  const getProduto = async (event) => {
    let data
    let ID_EMPRESA = event.target.value;

    sessionStorage.removeItem('selectID_PRODUTO');
    sessionStorage.removeItem('selectID_ASSUNTO');

    data = await EmpresaProdutos(ID_EMPRESA);

    createSelect(
      "Selecione um Produto",
      "inputProduto",
      data,
      "produto.NM_PRODUTO",
      "produto.ID_PRODUTO",
      "selectID_PRODUTO");

    document.getElementById("inputAssunto").options.length = 1;

  }

  const getAssunto = async (event) => {
    let data;
    let ID_PRODUTO = event.target.value;

    sessionStorage.removeItem('selectID_ASSUNTO');

    data = await AssuntosByProduto(ID_PRODUTO);

    createSelect(
      "Selecione um Assunto",
      "inputAssunto",
      data,
      "DS_ASSUNTO",
      "ID_ASSUNTO",
      "selectID_ASSUNTO");
  }

  const setSessionInputsValue = () => {
    sessionStorage.setItem("selectID_CHAMADO", document.getElementById('inputCodigo').value);
    sessionStorage.setItem("selectDT_ABERTURA", document.getElementById('inputDtAbertura').value);
    sessionStorage.setItem("selectDT_ENCERRAMENTO", document.getElementById('inputDtFinal').value);
    sessionStorage.setItem("selectDM_STATUS", document.getElementById('inputStatus').value);
    sessionStorage.setItem("selectID_EMPRESA", document.getElementById('inputEmpresa').value);
    sessionStorage.setItem("selectID_PRODUTO", document.getElementById('inputProduto').value);
    sessionStorage.setItem("selectID_ASSUNTO", document.getElementById('inputAssunto').value);
  }

  const doLimparCampoPesquisa = () => {
    sessionStorage.removeItem('selectID_EMPRESA');
    sessionStorage.removeItem('selectID_PRODUTO');
    sessionStorage.removeItem('selectID_ASSUNTO');
    sessionStorage.removeItem('selectID_CHAMADO');
    sessionStorage.removeItem('selectDT_ABERTURA');
    sessionStorage.removeItem('selectDT_ENCERRAMENTO');
    sessionStorage.removeItem('selectDM_STATUS');
    sessionStorage.removeItem('selectID_ASSUNTO');

    document.getElementById('inputCodigo').value = '';
    document.getElementById('inputDtAbertura').value = '';
    document.getElementById('inputDtFinal').value = '';

    document.getElementById('inputStatus').selectedIndex = 1;
    document.getElementById('inputEmpresa').selectedIndex = 0;
    document.getElementById('inputProduto').options.length = 1;
    document.getElementById('inputAssunto').options.length = 1;
  }

  const submit = (event) => {
    if (event !== undefined)
      event.preventDefault();
      
    document.getElementById("list-clear").innerHTML = "";

    getDataByForm(
      document.getElementById('formOsChamadoFiltro'),
      function(data){
        var userList = new List('tableOS', 
          {
            valueNames:["status","codigo","assunto","cliente","criador","responsavel","dtabertura","prioridade","dtentrega","dsresumida"],
            item: 
              `<tr>
                <td class="status"></td>
                <td class="codigo"></td>
                <td class="assunto"></td>
                <td class="cliente"></td>
                <td class="criador"></td>
                <td class="responsavel"></td>
                <td class="dtabertura"></td>
                <td class="prioridade"></td>
                <td class="dtentrega"></td>
                <td class="dsresumida"></td>
              </tr>`,
            page:5,
            pagination:true
          }, 
          data.map(oschamado =>
            (
              {
                status: 
                  `<span
                    class='badge rounded-pill bg-${((oschamado.DM_STATUS == '0') ? 'secondary' : (oschamado.DM_STATUS == '1') ? 'primary' : 'success')}'
                    data-bs-toggle='tooltip'
                    data-bs-html='true'
                    title='${((oschamado.DM_STATUS == '0') ? 'Não Iniciada' : (oschamado.DM_STATUS == '1') ? 'Iniciada' : 'Encerrada')}'
                  >${((oschamado.DM_STATUS == '0') ? 'n' : (oschamado.DM_STATUS == '1') ? 'i' : 'e')}
                  </span>`,
                codigo: `<a href="${url}/dashboard/chamado/${oschamado.ID_CHAMADO}" class="link-primary">${oschamado.ID_CHAMADO}</a>`,
                assunto: oschamado.assunto.DS_ASSUNTO,
                cliente: oschamado.empresa.NM_FANTASIA,
                criador: oschamado.criador.NM_USUARIO,
                responsavel: oschamado.usuario.NM_USUARIO,
                dtabertura: oschamado.DT_ABERTURA,
                prioridade: oschamado.NR_PRIORIDADE  == '2' ? 'Alta': oschamado.NR_PRIORIDADE == '1' ? 'Média' : 'Baixa',
                dtentrega: oschamado.DT_DATA_DESEJAVEL_DE_ENTREGA,
                dsresumida: oschamado.DS_REDUZIDA,
              }
            )
          )    
        );
      },
      function(err){
      }
    );

    setSessionInputsValue();
  };

  const loadChamados = () => {
    startSelects();
    var usuario = JSON.parse(getCookie('usuario'));
    document.getElementById('NomeCriadorAdd').innerText = usuario.NM_USUARIO;
  }

  /**
   *  Filtro
   */

  document.getElementById('formOsChamadoFiltro').addEventListener('submit', submit);
  document.getElementById('inputEmpresa').addEventListener('change', getProduto);
  document.getElementById('inputProduto').addEventListener('change', getAssunto);
  document.getElementById('btnLimpar').addEventListener('click', doLimparCampoPesquisa);

  /**
   *  Modal Add OS
   */
   
  document.getElementById('modalNovaOS').addEventListener('shown.bs.modal', loadNovaOS);
  document.getElementById('inputEmpresaAdd').addEventListener('change', getProdutoAdd);
  document.getElementById('inputProdutoAdd').addEventListener('change', getAssuntoAdd);

  document.getElementById('formOsChamadoAdd').addEventListener('submit', submitAdd);

  window.addEventListener('load', loadChamados);
}

export default Chamados;
