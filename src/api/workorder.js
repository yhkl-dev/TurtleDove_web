import request from '@/utils/request'

// task
export function getWorkOrderTaskList(params) {
  return request({
    url: '/workOrderTask/',
    method: 'get',
    params
  })
}

export function addWorkOrderOperation(data) {
  return request({
    url: '/workOrderOperation/',
    method: 'post',
    data
  })
}

export function getWorkOrderOperationCode(params) {
  return request({
    url: '/workOrderTaskOperationStatusCode/',
    method: 'get',
    params
  })
}

export function getWorkOrderTaskCode(params) {
  return request({
    url: '/workOrderTaskStatusCode/',
    method: 'get',
    params
  })
}
