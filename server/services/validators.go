package services

import (
	"GoMoneyZwei/server/structs"
	"fmt"
)

func validateIsNil(f string, v interface{}, errors structs.RecordErrors) bool {
	if v == nil {
		errors[f] = append(errors[f], "is blank")
		return true
	}
	return false
}

func validateIsBlank(f string, v string, errors structs.RecordErrors) {
	if len(v) == 0 {
		errors[f] = append(errors[f], "is blank")
	}
}

func validateInSet(f string, v string, enums []string, errors structs.RecordErrors) {
	index := -1

	for i, e := range enums {
		if e == v {
			index = i
		}
	}

	if index == -1 {
		errors[f] = append(errors[f], fmt.Sprintf("is not in set %v", enums))
	}
}
