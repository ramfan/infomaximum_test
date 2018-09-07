import {createLogic} from 'redux-logic';

class Store {
	actionTypes;
	actions;
	reducer;
	selectors;
	logics;

	/**
	 * Создадим все элементы стора сразу, дабы не занииматься кэшированием,
	 * поскольку, так или иначе, все эти методы будут вызваны, и созданы
	 * все составные части стора, хоть и по отдельности
	 */
	constructor () {
		this.actionTypes = this.getActionTypes();
		this.actions = this.getActions();
		this.reducer = this.getReducer();
		this.selectors = this.getSelectors();
		this.logics = this.getLogics();
	}

	/**
	 * Здесь будут сгенерированы все необходимые типы событий, они будут
	 * нужны только этом duck-store
	 */
	getActionTypes () {
		return {
			LOAD: 'LOAD',
			SUBMIT: 'SUBMIT',
			RECEIVE: 'RECEIVE',
			CANCEL: 'CANCEL',
		};
	}

	/**
	 * Здесь будут сгенерированы все необходимые генераторы событий
	 * (action creators), могут использоваться и в этом файле, и в
	 * компонентах приложения
	 */
	getActions () {
		const actionTypes = this.actionTypes;

		return {
			load (id) {
				return {
					type: actionTypes.LOAD,
					payload: {
						id
					},
				}
			},
			submit (id, data) {
				return {
					type: actionTypes.SUBMIT,
					payload: {
						id,
						data
					},
				}
			},
			receive (data) {
				return {
					type: actionTypes.RECEIVE,
					payload: {
						data
					},
				}
			},
			cancel () {
				return {
					type: actionTypes.CANCEL,
				}
			},
		}
	}

	/**
	 * Здесь будет сгенерирован редьюсер, который будет складировать
	 * данные из событий в store, будет использоваться только в
	 * файле, создающем store
	 */
	getReducer () {
		const actionTypes = this.actionTypes;

		return function storeReducer (state = {}, action) {
			switch (action.type) {
				case (actionTypes.LOAD):
				case (actionTypes.SUBMIT): {
					return {
						...state,
						loading: true,
					}
				}
				case (actionTypes.RECEIVE): {
					return {
						...state,
						data: action.payload.data,
						loading: false,
					}
				}
				case (actionTypes.CANCEL): {
					return {
						...state,
						loading: false,
					}
				}
				default: return state;
			}
		};
	}

	/**
	 * Здесь будут сгенерированы селекторы, которые будут получать
	 * из store информацию, могут использоваться как в этом файле,
	 * так и в компонентах приложения
	 */
	getSelectors () {
		return {
			getData (state) {
				return state.data;
			},
			isLoading (state) {
				return !!state.loading;
			},
		};
	}

	/**
	 * Здесь будут сгенерированы логики, обрабатывающие события,
	 * будут использоваться только в файле, создающем store
	 */
	getLogics () {
		const actionTypes = this.actionTypes;
		const actions = this.actions;

		return {
			load: createLogic({
				/**
				 * Название логики, лучше сделать его уникальным, иначе она перезапишет
				 * другую, и будет работать только одна из них
				 */
				name: 'Data_Loading',

				/**
				 * Событие, которое будет обрабатывать эта логика
				 */
				type: actionTypes.LOAD,

				/**
				 * Событие, которое отменит логику, если она работает
				 */
				cancelType: actionTypes.CANCEL,

				/**
				 * Хук, в котором нужно делать все обработки события
				 * @param action - обрабатываемое событие
				 * @param dispatch - функция dispatch из стора
				 * @param done - функция, корректно завершающая логику обработки события
				 */
				process ({action}, dispatch, done) {
					/**
					 * Загружаем данные с сервера любым способом, используя переданный
					 * в action.payload.id идентификатор данных
					 */
					const data = {
						zeptus: 25,
					};

					// Отправляем action, который сохранит полученные с сервера данные
					dispatch(actions.receive(data));

					// Завершим выполнение логики вызвав функцию done
					done();
				}
			}),
			submit: createLogic({
				name: 'Data_Submitting',
				type: actionTypes.SUBMIT,
				cancelType: actionTypes.CANCEL,
				process ({action}, dispatch, done) {
					/**
					 * Отправляем данные на сервер любым способом, используя переданные
					 * в action.payload данные
					 */
					const data = {
						submitted: true,
					};

					dispatch(actions.receive(data));
					done();
				}
			}),
		}
	}
}

/**
 * Это уже содержимое другого файла, положил здесь только для
 * удобства
 */
const store = new Store();